rb.getString("This is string 1 with a slash slash translator's comment."); // i18n this translator's comment appears later on the same line

// i18n this translator's comment appears on the line before
rb.getString("This is string 2 with a slash slash translator's comment."); 

//i18n this translator's comment appears on the line before with no space after the slashes
rb.getString("This is string 3 with a slash slash translator's comment."); 

// i18n this translator's comment should be ignored in favour of the one that appears on the same line.
rb.getString("This is string 4 with a slash slash translator's comment."); // i18n This one appears on the same line. 

rb.getString("This string has no translator's comment."); // this is not a translator's comment
