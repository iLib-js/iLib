/**
 * 
 */
package com.ilib.tools.table;

import java.io.File;
import java.io.IOException;

/**
 * Random file manipulation utilities that don't really have any other good place to live.
 * 
 * @author Edwin Hoogerbeets
 *
 */
public class FileUtils {

	/**
	 * Recursively delete a directory and all the files it contains.
	 * 
	 * @param path path to delete
	 * @throws IOException if the delete fails
	 */
	public static void deleteDir(File path) throws IOException
	{
		try{
			
			if ( path.isDirectory() ) {
				File[] files = path.listFiles();
				if ( files != null ) {
					for ( int i = 0; i < files.length; i++ ) {
						deleteDir(files[i]);
					}
				}
			}
			path.delete();
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	
	/**
	 * Return the file name extension of this file name. If the file
	 * name does not have an extension, return null.
	 * 
	 * @param fileName file name with a possible extension
	 * @return the extension, or null if there is no extension
	 */
	public static String getExtension(String fileName)
	{
		if ( fileName == null || fileName.length() == 0 ) {
			return null;
		}
		
		String extension = null;
		int dot = fileName.lastIndexOf('.');
		if ( dot != -1 && dot+1 < fileName.length() ) {
			extension = fileName.substring(dot+1);
			extension = extension.toLowerCase();
		}
		return extension;
	}
	
	/**
	 * Return the base name without the extension of this file name. 
	 * If the file name does not have an extension, return the entire
	 * name.
	 * 
	 * @param fileName file name with a possible extension
	 * @return the base name without the extension, or the whole 
	 * fileName if there is no extension
	 */
	public static String getBaseName(String fileName)
	{
		if ( fileName == null || fileName.length() == 0 ) {
			return null;
		}
		
		String basename = fileName;
		int slash = fileName.lastIndexOf('/');
		if ( slash != -1 ) {
			basename = basename.substring(slash+1);
		}
		slash = fileName.lastIndexOf('\\');
		if ( slash != -1 ) {
			basename = basename.substring(slash+1);
		}
		
		int dot = basename.lastIndexOf('.');
		if ( dot != -1 ) {
			basename = basename.substring(0, dot);
		}
		
		return basename;
	}

}
