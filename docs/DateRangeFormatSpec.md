# Date Range DateFormat Spec

A Date range format is not written in CLDR. These data format style is defined in iLib. 


### DateRange Category

Category | Range Gap | Shares data | Detail Description | 
--- | --- | --- | --- |
c00 | within 3 days	 | Year, month, day | Year, month, and date are same, but time is different.  | 
c01 | within 3 days	 | Year, month | Year and month are same but date and time are different. 
c02 | within 3 days	 | - | Year is same but month, date, and time are different. (ie. it straddles a month boundary) | 
c03 | within 3 days	 | - | 	Year, month, date, and time are all different. (ie. it straddles a year boundary)| 
c10 | within 730 days (2 years)	 | Year, Month | 	Year and month are the same, but date is different. | 
c11 | within 730 days (2 years) | Year | Year is the same, but month, date, and time are different. |
c12 | within 730 days (2 years) | - | 	All fields are different. (i.e. straddles a year boundary) |
c20 | within 3650 days (10 years) | - | All fields are different. (i.e. straddles a year boundary) | 
c30 | onger than 10 years | - | 	All fields are different. (i.e. straddles a year boundary) |


### Format abbreviation

*  stand for Year (Start Year, End Year)
*  "M" stands for Month. (Start Month, End Month)
*  "d" stands for day. (Start day, End day)
*  "st" stands for start time. "et" stands for end time.

### Format case 1

##### 1. {date}{time}:  dMy order
* ###### example locale: en-GB

Category | Format length | Format Pattern | 
--- | --- | --- | 
c00 | all | dMy st-et 
c01 | all	 | dMy st – dMy et
c02 | all	 |  dMy st – dMy et
c03 | all	 |  	dMy st – dMy et
c10 | all	 | d – d My
c11 | all |	dM – dMy
c12 | all | dMy – dMy
c20 | all | My – My
c30 | all | y – y

##### 2. {date}{time}:  Mdy order
* ###### example locale: en-US

Category | Format length | Format Pattern | 
--- | --- | --- | 
c00 | all | Mdy st – et
c01 | all	 | Mdy st – Mdy et
c02 | all	 |  Mdy st – Mdy et
c03 | all	 |  Mdy st – Mdy et
c10 | full, long, medium	 | Md – dy
c10 | short	 | Mdy –Mdy 
c11 | full, long, medium |Md – Mdy
c11 | short	 | Md – Mdy
c12 | all |	Mdy – Mdy
c20 | all | My – My
c30 | all | y – y

##### 3. {date}{time}:  yMd order
* ###### example locale: ko-KR
Category | Format length | Format Pattern | 
--- | --- | --- | 
c00 | all | yMd st – et
c01 | all	 | yMd st – yMd et
c02 | all	 | yMd st – yMd et
c03 | all	 | yMd st – yMd et
c10 | all | yMd – d
c11 | full, long |yMd – Md
c11 | medium, short	 | yMd – yMd
c12 | all |	yMd – yMd
c20 | all |yM – yM
c30 | all | y – y

##### 4. {date}{time}:  ydM order 
* ###### example locale: kk-Cyrl-KZ(medium), lv-LV(full, long, medium), uz-* 
Category | Format length | Format Pattern | 
--- | --- | --- | 
c00 | all | ydM st – et
c01 | all	 | ydM st – ydM et
c02 | all	 | ydM st – ydM et
c03 | all	 | ydM st – ydM et
c10 | all | ydM – dM
c11 | all |ydM – dM
c12 | all |	ydM – dM
c20 | all |yM – yM
c30 | all | y – y


##### 5. {time}{date}:  dMy  order
* ###### example locale: vi-VN

Category | Format length | Format Pattern | 
--- | --- | --- | 
c00 | all | st – et dMy
c01 | all	 | 	st dMy – et dMy
c02 | all	 | 	st dMy – et dMy
c03 | all	 | 	st dMy – et dMy
c10 | all | d – dMy
c11 | all |dM – dMy
c12 | all |dMy – dMy
c20 | all |My – My
c30 | all |y – y


##### 6. {time}{date}:  Mdy  order
* ###### example locale: ee-* (ee-EG, ee-TG)

Category | Format length | Format Pattern | 
--- | --- | --- | 
c00 | all | st – et Mdy
c01 | all	 | st Mdy – et Mdy
c02 | all	 | st Mdy – et Mdy
c03 | all	 | st Mdy – et Mdy
c10 | full, long, medium | Md – dy
c10 | short | Mdy – Mdy
c11 | all |Md – Mdy
c12 | all |	Mdy – Mdy
c20 | all |	My – My
c30 | all |y – y

