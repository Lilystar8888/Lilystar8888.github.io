// JScript 檔

function GenerateDateCombination(frmname,selyearname,selmonthname,seldatename,beginyear,endyear,theyear,themonth,thedate,class_name,status){
    //Parameters        Description

    //-------------------------------------------------------------------------------------------------

    //frmname       :   Required , The name of form where the selectbox belong .        
    //selyearname   :   Required , The selectbox's name of year part .
    //selmonthname  :   Required , The selectbox's name of month part .
    //seldatename   :   Required , The selectbox's name of date part .
    //beginyear     :   Optional , The start year of the selectbox's year part , if omitted , default is 10 years less then this year .
    //endyear       :   Optional , The end year of the selectbox's year part , if omitted , default is 10 years more then this year .
    //theyear       :   Optional , The default selected year you wished , if omitted , default is this year .
    //themonth      :   Optional , The default selected month you wished , if omitted , default is this month .
    //thedate       :   Optional , The default selected date you wished , if omitted , default is today .

    if(!frmname||!selyearname||!selmonthname||!seldatename){    //If not specify the form name ,and each select box's name .
        document.write('參數不完整，請檢查 FormName , Year Select Name , Month Select Name , Date Select Name');
        return false;
    }

    if(beginyear&&!isNaN(beginyear))parseInt(beginyear)<0?0:beginyear;
    else beginyear=false;

    if(endyear&&!isNaN(endyear))parseInt(endyear)<0?0:endyear;
    else endyear=false;

    if(theyear&&!isNaN(theyear))parseInt(theyear)<0?0:theyear;
    else theyear=false;
    
    //alert('beginyear=' + beginyear + ',theyear=' + theyear)
    
   //如果 beginyear > theyear 
    if (beginyear!=false && theyear!=false) {
    	 if (beginyear > theyear) {
    	 	   beginyear=theyear
    	 }
    }
    //alert('beginyear=' + beginyear + ',theyear=' + theyear)
    
   //如果 endyear < theyear 
    if (endyear!=false && theyear!=false) {
    	 if (endyear < theyear) {
    	 	   endyear=theyear
    	 }
    }

    
    
    if(themonth&&!isNaN(themonth)){
        if(parseInt(themonth)>12){
            themonth=parseInt(themonth)%12
            themonth=0?1:themonth;
        }
    }
    else themonth=false;

    if(thedate&&!isNaN(thedate)){
        if(parseInt(thedate)>31){
            thedate=determinedate(theyear,themonth);
        }
    }
    else thedate=false;

    var today=new Date();                                   //Create object today
    var yyyy=(theyear)?theyear:today.getFullYear();         //Get the current year
    var mm=(themonth)?themonth:today.getMonth()+1;          //Get the current month
    var dd=(thedate)?thedate:today.getDate();               //Get the current date
    var bgnyr=(beginyear)?beginyear:1996;
    var endyr=(endyear)?endyear:today.getFullYear()+1;

    if(bgnyr>endyr){
        var tempyr=bgnyr;
        bgnyr=endyr;
        endyr=tempyr;
    }

    if((yyyy<bgnyr||yyyy>endyr) && yyyy != 0)yyyy=bgnyr;

    var yrsel;
    var mnsel;
    var daysel;

    //************ The year select box contains this year to 10 years later ****************
    yrsel='<select name='+selyearname+' class=' + class_name + ' onchange=\'switchthedays("'+frmname+'","'+selyearname+'","'+selmonthname+'","'+seldatename+'")\'>';
    
    if (yyyy == 1899) yrsel+='<option value=0 selected>請選擇</option>';
    else yrsel+='<option value=0>請選擇</option>';

    for(i=bgnyr;i<=endyr;i++){
        if(i==yyyy && yyyy != 1899)yrsel=yrsel+'<option value='+i+' selected>'+i+'</option>';
        else yrsel=yrsel+'<option value='+i+'>'+i+'</option>';
    }
    yrsel=yrsel+'</select>';

    //************ The month select box contains 12 months and this month was default selected ****************

    mnsel='<select name='+selmonthname+' class=' + class_name + ' onchange=\'switchthedays("'+frmname+'","'+selyearname+'","'+selmonthname+'","'+seldatename+'")\'>';

    if (yyyy == 1899 && mm == 12) mnsel+='<option value=0 selected>請選擇</option>';
    else mnsel+='<option value=0>請選擇</option>';

    for(i=1;i<=12;i++){
        if(i==mm && yyyy != 1899)mnsel=mnsel+'<option value='+i+' selected>'+i+'</option>';
        else mnsel=mnsel+'<option value='+i+'>'+i+'</option>';
    }
    mnsel=mnsel+'</select>';

    //************ The data select box contains the days taht depends on *******************
    //************ this year and this month and today was default selected ****************

    daysel='<select class=' + class_name + ' name='+seldatename+'>';

    if (yyyy == 1899 && mm == 12 && dd == 30) daysel+='<option value=0 selected>請選擇</option>';
    else daysel+='<option value=0>請選擇</option>';

    for(i=1;i<=determinedate(yyyy,mm);i++){
        if(i==dd && yyyy != 1899)daysel=daysel+'<option value='+i+' selected>'+i+'</option>';
        else daysel=daysel+'<option value='+i+'>'+i+'</option>';
    }
    daysel=daysel+'</select>';

    //*************** Show in the document *********************

    if (status == "return") {
    	return (yrsel+' 年 '+mnsel+' 月 '+daysel+' 日');
    } else {
        document.write (yrsel+' 年 '+mnsel+' 月 '+daysel+' 日');
    }
}

//************ To determine whether this year is bissextile and  *******
//************ how many days should this month contains ****************


function determinedate(yearvalue,monthvalue){
    switch(monthvalue){
        case 2:
            if(yearvalue%400==0 || (yearvalue%4==0 && yearvalue%100!=0))days=29;    //29 days in bissextile February 
            else days=28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days=30;
            break;
        default:
            days=31;
    }
    return days;
}

//************ Change the contents of the date select box *****************

function switchthedays(frmname,selyearname,selmonthname,seldatename){

    var today=new Date();               //Create object today
    var dd=today.getDate();             //Get the current date
    var objmonth=eval('document.'+frmname+'.'+selmonthname+'.value');
    var objyear=eval('document.'+frmname+'.'+selyearname+'.value');
    var objdaysel=eval('document.'+frmname+'.'+seldatename);

    objdaysel.length=determinedate(parseInt(objyear),parseInt(objmonth))+1;
    for(i=0;i<objdaysel.length;i++){
        if (i == 0){
          objdaysel.options[i].value=i;
          objdaysel.options[i].text='請選擇';
        } else {
          objdaysel.options[i].value=i;
          objdaysel.options[i].text=i;
          //if(i==dd-1)objdaysel.options[i].selected=true;
        }
       
    }
}
