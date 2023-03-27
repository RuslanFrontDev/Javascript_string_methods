// 1. charAt(reqem ile herfin yazdirmaq olur)
// const text = "salam ruslan necesen yaxsisanmi"
// console.log(text.charAt(6));
// 2. toLowercase(herfleri kicik gosterir)
// const text = "salam ruslan necesen yaxsisanmi";
// console.log(text.toLowerCase());
// 3. toUppercase(herfleri boyuk edir);
// const text = "salam ruslan necesen yaxsisanmi";
// console.log(text.toUpperCase());
// 4. concat(birlesdirir)
// const text = "salam ruslan necesen yaxsisanmi"
// const word = " elayam";
// console.log(text.concat(word));
// 5. includes(sözün daxil olub-olmadığını müəyyən edir) daxildirse true ya da false
// const text = "salam ruslan necesen yaxsisanmi";
// const word = "ruslan"
// console.log(text.includes(word));
// 6. endsWith(sondaki herfin true ya da false oldugunu gosterir ikinci pafametr olaraq indeksinin nece oldugunu deyirik)
// const str1 = 'Cats are the best!';
// console.log(str1.endsWith('best', 17));
// 7. indexOf(herf ve ya sozlerin necenci indexde oldugunu deyir);
// const text = "salam ruslan necesen yaxsisanmi";
// console.log(text.indexOf('ruslan'));
// 8. lastIndexOf(iki eyni herf ve ya sozun sonuncusunun indeksini gosterir)
// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
// const searchTerm = 'dog';
// console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`)
// 9. match(adi halda böyük/kiçiklik null, g halda null amma gi halda ise arrayin icinde gelecek)ı
// const text = "salam Ruslan necesen yaxsisanmi"
// console.log(text.match('ruslan'));
// console.log(text.match(/ruslan/g));
// console.log(text.match(/ruslan/gi));
// let text = "the rain in SPAIN stays mainly"
// console.log(text.match('ain'));
// console.log(text.match(/ain/g));
// console.log(text.match(/ain/gi));
// 10. matchAll(res operatorunnan istifade edib sozleri arraya atiriq)
// let text = "the rain in SPAIN stays mainly"
//  let res = text.matchAll("ain");
//  let res = text.matchAll(/ain/g);
//  let res = text.matchAll(/ain/gi);
//  console.log([...res]);
// 11. padEnd(cumlede nece soz yazilmali oldugunu deyir);
// const str1 = 'Breaded Mus';
// console.log(str1.padEnd(25, '*'));
// 12. padStart(basliga nece deyer atmaq lazim oldugunu deyir);
// const fullNumber = '2034399002125581';
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
// console.log(maskedNumber);
// 13. repeat( nece defe tekrarlamaq lazimdirsa reqemi yaziri )
// const text = "salam Ruslan necesen yaxsisanmi";
// console.log(text.repeat(2));
// 14. replace()
// const text = "salam Ruslan necesen yaxsisanmi";
// console.log(text.replace("Ruslan", "Lala"));
// 15. slice(başladığı index-dən bitdiyi index (misal: 9 index tekrar sayacaq) sayılmamamqla dilimliyir)
// const text = "salam ruslan necesen yaxsisanmi";
// console.log(text.slice(2, 9));
// 16. split(array-e cevirir. Əgər . varsa nöqtələrdən ayrırır, / varsa xəttdən və s. )
// const text= "salam/ruslan/necesen/yaxsisanmi";
// console.log(text.split("/"));
// 17. startWidth(hansı söz ilə başladığını true və ya false ilə cavablandırır);
// const text= "salam ruslan necesen yaxsisanmi";
// console.log(text.startsWith(""));
// 18. substring(başladığı index-dən davam edərək bitdiyi index-ə qədər dilimliyəcək);
// const text= "salam ruslan necesen yaxsisanmi";
// console.log(text.substring(2,6));
// 19. toString(stringə çevirir)ı
// const text= 6;
// console.log(typeof(text.toString()));
// 20.trim(), trimStart(), trimEnd()
// const text = "    salam ruslan necesen yaxsisanmi    ";
// console.log(text);
// console.log(text.trim());
// console.log(text.trimStart());
// console.log(text.trimEnd())
// 21. valueOf(objede olan stringi string kimi qaytarir);
// const stringObj = new String('foo');
// console.log(stringObj);
// console.log(stringObj.valueOf());



// console.log(String.fromCharCode(55562));
// console.log(String.fromCodePoint(9811, 9733, 9842, 0x2F804));

