/* i18n This is a slash dot translator's comment. */
rb.getString("String 1 with slash dot translator's comment.");

/* 
i18n 
This is a multiline slash dot 
translator's comment with the
return characters removed. 
*/
rb.getString("String 2 with slash dot translator's comment.");

/* 
 * i18n 
 * This is a slash dot translator's comment with stars at the 
 * beginning of the lines. 
 */
rb.getString("String 3 with slash dot translator's comment.");


rb.getString("String 4 with slash dot translator's comment."); /* i18n Translator's comment on the same line. */

/** i18n This is a slash dot translator's comment with a slash double dot. */
rb.getString("String 5 with slash dot translator's comment.");


/* i18n This translator's comment appears before the line and should be ignored in favour of the next comment. */
rb.getString("String 6 with slash dot translator's comment."); /* i18n This one appears on the same line. */


/* This is not a translator's comment. */
rb.getString("String 7 with slash dot translator's comment."); /* This is also not one. */