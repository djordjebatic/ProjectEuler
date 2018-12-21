/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. 
For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. 
The use of "and" when writing out numbers is in compliance with British usage.
*/

  //Numbers 1-9: 
  //3 + 3 + 5 +4 + 4 +3 +5 +5 +4 = 36
  //Numbers 10-19
  //3 + 6 + 6 + 8 + 8 + 7 + 7 + 9 + 8 + 8 = 70
  //Numbers 20-99
  //10*(6 + 6 + 5 + 5 + 5 + 7 + 6 + 6)<->(twenty, thirty...) + 8*36<->(brojevi 1-9) = 748
 
  // 1-99 total : 854

  //Numbers 100-1000
  //36*100 - one,two...hundred = 3600
  //9*854 - 1-99 9 times       = 7686
  //7*9 - "hundred"            = 63
  //11*10*9 - "hundred and"    = 9810

  //total: 3600 + 7686 + 63 + 8910= 20259 + 11(one thousand) = 21124 
