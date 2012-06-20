for i in *.html
do
echo $i
sed 's@iliball-compiled.js@ilib-ut-compiled.js@' $i > x
mv x $i
done
