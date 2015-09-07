#!/usr/bin/env python
# this program is to simply publish some files to the directory of the hosting server 
# Eric
# July 31, 2015

import os, sys, getopt, base64
import paramiko
import scp

# url and login information 
uid = 'webos-i18n'
pwd = 'webos-i18n'

class Opr: 
	def __init__(self, url):
		self._url = url
		self._ssh = paramiko.SSHClient()
		return
	
	def connect(self): 
		try:
			self._ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
			self._ssh.connect(self._url, username=uid, password=pwd)
			return 0 
		except Exception as e:
			print(e) 
			return 1 

	def disconnect(self):
		self._ssh.close()
		return 0 

	def validatehostdir(self, dir): 
		stdin, stdout, stderr = self._ssh.exec_command('cd ' + dir)
		for line in stdout:
			print line.strip('\n')
		if not stdout.channel.recv_exit_status():
			return 0
		return 1

	def cleanuphostdir(self, dir):
		_prohibited = ['', '/', '/var', '/var/', '/var/www', '/var/www/']
		if dir in _prohibited:
			return 1
		stdin, stdout, stderr = self._ssh.exec_command('rm -rf ' + dir + '/*')  
		for line in stdout:
			print line.strip('\n')
		if not stdout.channel.recv_exit_status():
			return 0
		return 1

	def publish(self, srcdir, dstdir):
		try: 
			self._scp = scp.SCPClient(self._ssh.get_transport())
			self._scp.put( srcdir+'/', dstdir+'/', 1, 1 );  
			return 0
		except Exception as e:
			print(e)
			return 1

	def listhostdir(self, dir): 
		stdin, stdout, stderr = self._ssh.exec_command('ls -al ' + dir + '/')
		for line in stdout:
			print line.strip('\n')
		if not stdout.channel.recv_exit_status():
			return 0
		return 1

def main():
	try:
		opts, args = getopt.getopt(sys.argv[1:], "h", ["help"])
	except getopt.error, msg:
		print msg
		print "for help use --help"
		sys.exit(2)

	for o, a in opts:
		if o in ("-h", "--help"):
			print __doc__
			sys.exit(0)
	
	if not( len(sys.argv) == 4 ):
		sys.exit('Usage: python %s from_localdir to_serverurl to_hostdir' % sys.argv[0] )

	_tmp1 = sys.argv[1]
	_localdir = _tmp1.strip()
	if not os.path.exists(_localdir):
		sys.exit('%s was not found!' % sys.argv[1])
	
	_tmp2 = sys.argv[2]
	_hosturl = _tmp2.strip()
	opr = Opr(_hosturl)
	if not opr.connect():
		print 'Connection has been established to %s' % sys.argv[2] 
	else:
		sys.exit("Can't connect to %s" % sys.argv[2])
	
	_tmp3 = sys.argv[3]
	_hostdir = _tmp3.strip()
	if not opr.validatehostdir(_hostdir):
		print 'Remote dir %s is valid' % sys.argv[3]
	else:
		if not opr.disconnect():
			print 'Connection has now been closed'
		sys.exit('Remote dir %s is not valid' % sys.argv[3])

	if not opr.cleanuphostdir(_hostdir):
		print 'Remote dir %s has now been cleaned up' % sys.argv[3] 
	else:
		if not opr.disconnect():
			print 'Connection has now been closed'
		sys.exit('Remote dir %s cleanup failed!' % sys.argv[3])
		
	if not opr.publish(_localdir, _hostdir):
		print 'Source dir %s has been successfully published to %s' % (sys.argv[1], sys.argv[3])
	else:
		print 'Publish is failed!'

	opr.listhostdir(_hostdir)

	if not opr.disconnect():
		print 'Connection has now been closed'

	return

if __name__ == "__main__":
	main()

# eof

