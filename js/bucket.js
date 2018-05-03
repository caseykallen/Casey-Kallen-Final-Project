/*!star rating system */
$( document ).ready(function() {
  $("#rating_simple").webwidget_rating_simple({
    rating_star_length: '3',
    rating_initial_value: '',
    rating_function_name: '',
    directory: 'libraries/star_rating/'
  });
  $("#rating_simple2").webwidget_rating_simple({
    rating_star_length: '3',
    rating_initial_value: '',
    rating_function_name: '',
    directory: 'libraries/star_rating/'
  });
  $("#rating_simple3").webwidget_rating_simple({
    rating_star_length: '3',
    rating_initial_value: '',
    rating_function_name: '',
    directory: 'libraries/star_rating/'
  });
  $("#rating_simple4").webwidget_rating_simple({
    rating_star_length: '3',
    rating_initial_value: '',
    rating_function_name: '',
    directory: 'libraries/star_rating/'
  });

});

/* This function controls the progress bar when the stars are clicked*/
function starClick(){
var Count = $("#progressBar").html();
Count = Count.slice(0,-1);
Count = parseInt(Count);
if (Count < 100){
Count = Count + 25;
}
  $("#progressBar").css('width', (Count + "%"));
  $("#progressBar").html(Count + "%");
}

/* This function controls the progress bar when the go buttons are clicked on my favorites*/
function FavoritesProgressClick(){
var Count = $("#myFavoritesProgressBar").html();
Count = Count.slice(0,-1);
Count = parseInt(Count);
if (Count < 100){
Count = Count + 25;
}
  $("#myFavoritesProgressBar").css('width', (Count + "%"));
  $("#myFavoritesProgressBar").html(Count + "%");
}


/*!
 * jquery.sumoselect - v2.1.0
 * http://hemantnegi.github.io/jquery.sumoselect
 */

!function(e){"namespace sumo";e.fn.SumoSelect=function(t){var l=e.extend({placeholder:"Select Here",csvDispCount:3,captionFormat:"{0} Selected",floatWidth:400,forceCustomRendering:!1,nativeOnDevice:["Android","BlackBerry","iPhone","iPad","iPod","Opera Mini","IEMobile","Silk"],outputAsCSV:!1,csvSepChar:",",okCancelInMulti:!1,triggerChangeCombined:!0,selectAll:!1,selectAlltext:"Select All"},t),s=this.each(function(){var t=this;!this.sumo&&e(this).is("select")&&(this.sumo={E:e(t),is_multi:e(t).attr("multiple"),select:"",caption:"",placeholder:"",optDiv:"",CaptionCont:"",is_floating:!1,is_opened:!1,mob:!1,Pstate:[],createElems:function(){var t=this;return t.E.wrap('<div class="SumoSelect" tabindex="0">'),t.select=t.E.parent(),t.caption=e("<span></span>"),t.CaptionCont=e('<p class="CaptionCont"><label><i></i></label></p>').addClass("SlectBox").attr("style",t.E.attr("style")).prepend(t.caption),t.select.append(t.CaptionCont),t.E.attr("disabled")&&t.select.addClass("disabled").removeAttr("tabindex"),l.outputAsCSV&&t.is_multi&&t.E.attr("name")&&(t.select.append(e('<input class="HEMANT123" type="hidden" />').attr("name",t.E.attr("name")).val(t.getSelStr())),t.E.removeAttr("name")),t.isMobile()&&!l.forceCustomRendering?void t.setNativeMobile():(t.E.hide(),t.optDiv=e('<div class="optWrapper">'),t.floatingList(),ul=e('<ul class="options">'),t.optDiv.append(ul),l.selectAll&&t.selAll(),e(t.E.children("option")).each(function(l,i){i=e(i),t.createLi(i)}),t.is_multi&&t.multiSelelect(),t.select.append(t.optDiv),t.basicEvents(),void t.selAllState())},createLi:function(t,l){var i=this;return t.attr("value")||t.attr("value",t.val()),li=e('<li data-val="'+t.val()+'"><label>'+t.text()+"</label></li>"),i.is_multi&&li.prepend("<span><i></i></span>"),t[0].disabled&&(li=li.addClass("disabled")),i.onOptClick(li),t[0].selected&&li.addClass("selected"),t.attr("class")&&li.addClass(t.attr("class")),ul=i.optDiv.children("ul.options"),"undefined"==typeof l?ul.append(li):ul.children("li").eq(l).before(li),li},getSelStr:function(){return sopt=[],this.E.children("option:selected").each(function(){sopt.push(e(this).val())}),sopt.join(l.csvSepChar)},multiSelelect:function(){var t=this;t.optDiv.addClass("multiple"),t.okbtn=e('<p class="btnOk">OK</p>').click(function(){l.triggerChangeCombined&&(changed=!1,t.E.children("option:selected").length!=t.Pstate.length?changed=!0:t.E.children("option:selected").each(function(){t.Pstate.indexOf(e(this).val())<0&&(changed=!0)}),changed&&(t.E.trigger("change").trigger("click"),t.setText())),t.hideOpts()}),t.cancelBtn=e('<p class="btnCancel">Cancel</p>').click(function(){t._cnbtn(),t.hideOpts()}),t.optDiv.append(e('<div class="MultiControls">').append(t.okbtn).append(t.cancelBtn))},_cnbtn:function(){var e=this;for(e.E.children("option:selected").each(function(){this.selected=!1}),e.optDiv.find("li.selected").removeClass("selected"),i=0;i<e.Pstate.length;i++)e.E.children('option[value="'+e.Pstate[i]+'"]')[0].selected=!0,e.optDiv.find('li[data-val="'+e.Pstate[i]+'"]').addClass("selected");e.selAllState()},selAll:function(){var t=this;t.is_multi&&(t.chkAll=e("<i>"),t.selAll=e('<p class="select-all"><label>'+l.selectAlltext+"</label></p>").prepend(e("<span></span>").append(t.chkAll)),t.chkAll.on("click",function(){t.selAll.toggleClass("selected"),t.optDiv.find("ul.options li").each(function(l,i){i=e(i),t.selAll.hasClass("selected")?i.hasClass("selected")||i.trigger("click"):i.hasClass("selected")&&i.trigger("click")})}),t.optDiv.prepend(t.selAll))},selAllState:function(){var t=this;if(l.selectAll){var i=0,s=0;t.optDiv.find("ul.options li").each(function(t,l){e(l).hasClass("selected")&&i++,e(l).hasClass("disabled")||s++}),i==s?t.selAll.removeClass("partial").addClass("selected"):0==i?t.selAll.removeClass("selected partial"):t.selAll.addClass("partial")}},showOpts:function(){var t=this;t.E.attr("disabled")||(t.is_opened=!0,t.optDiv.addClass("open"),e(document).on("click.sumo",function(e){if(!t.select.is(e.target)&&0===t.select.has(e.target).length){if(!t.is_opened)return;t.hideOpts(),t.is_multi&&l.okCancelInMulti&&t._cnbtn()}}),t.is_floating&&(H=t.optDiv.children("ul").outerHeight()+2,t.is_multi&&(H+=parseInt(t.optDiv.css("padding-bottom"))),t.optDiv.css("height",H)),t.is_multi&&(t.is_floating||l.okCancelInMulti)&&(t.Pstate=[],t.E.children("option:selected").each(function(){t.Pstate.push(e(this).val())})))},hideOpts:function(){var t=this;t.is_opened=!1,t.optDiv.removeClass("open").find("ul li.sel").removeClass("sel"),e(document).off("click.sumo")},setOnOpen:function(){var e=this,t=e.optDiv.find("ul li").eq(e.E[0].selectedIndex);t.addClass("sel"),e.showOpts()},nav:function(e){var t,l=this,i=l.optDiv.find("ul li.sel");if(l.is_opened&&i.length){if(t=e?i.prevAll("li:not(.disabled)"):i.nextAll("li:not(.disabled)"),!t.length)return;i.removeClass("sel"),i=t.first().addClass("sel");var s=l.optDiv.find("ul"),n=s.scrollTop(),o=i.position().top+n;o>=n+s.height()-i.outerHeight()&&s.scrollTop(o-s.height()+i.outerHeight()),n>o&&s.scrollTop(o)}else l.setOnOpen()},basicEvents:function(){var t=this;t.CaptionCont.click(function(e){t.E.trigger("click"),t.is_opened?t.hideOpts():t.showOpts(),e.stopPropagation()}),t.select.on("keydown",function(e){switch(e.which){case 38:t.nav(!0);break;case 40:t.nav(!1);break;case 32:case 13:t.is_opened?t.optDiv.find("ul li.sel").trigger("click"):t.setOnOpen();break;case 9:case 27:return t.is_multi&&l.okCancelInMulti&&t._cnbtn(),void t.hideOpts();default:return}e.preventDefault()}),e(window).on("resize.sumo",function(){t.floatingList()})},onOptClick:function(t){var i=this;t.click(function(){var t=e(this);t.hasClass("disabled")||(txt="",i.is_multi?(t.toggleClass("selected"),i.E.children('option[value="'+t.data("val")+'"]')[0].selected=t.hasClass("selected"),i.selAllState()):(t.parent().find("li.selected").removeClass("selected"),t.toggleClass("selected"),i.E.val(t.attr("data-val"))),i.is_multi&&l.triggerChangeCombined&&(i.is_floating||l.okCancelInMulti)||(i.setText(),i.E.trigger("change").trigger("click")),i.is_multi||i.hideOpts())})},setText:function(){var t=this;if(t.placeholder="",t.is_multi){for(sels=t.E.children(":selected").not(":disabled"),i=0;i<sels.length;i++){if(i>=l.csvDispCount&&l.csvDispCount){t.placeholder=l.captionFormat.replace("{0}",sels.length);break}t.placeholder+=e(sels[i]).text()+", "}t.placeholder=t.placeholder.replace(/,([^,]*)$/,"$1")}else t.placeholder=t.E.children(":selected").not(":disabled").text();return is_placeholder=!1,t.placeholder||(is_placeholder=!0,t.placeholder=t.E.attr("placeholder"),t.placeholder||(t.placeholder=t.E.children("option:disabled:selected").text())),t.placeholder=t.placeholder?t.placeholder:l.placeholder,t.caption.text(t.placeholder),csvField=t.select.find("input.HEMANT123"),csvField.length&&csvField.val(t.getSelStr()),is_placeholder?t.caption.addClass("placeholder"):t.caption.removeClass("placeholder"),t.placeholder},isMobile:function(){for(var e=navigator.userAgent||navigator.vendor||window.opera,t=0;t<l.nativeOnDevice.length;t++)if(e.toString().toLowerCase().indexOf(l.nativeOnDevice[t].toLowerCase())>0)return l.nativeOnDevice[t];return!1},setNativeMobile:function(){var e=this;e.E.addClass("SelectClass"),e.mob=!0,e.E.change(function(){e.setText()})},floatingList:function(){var t=this;t.is_floating=e(window).width()<=l.floatWidth,t.optDiv.toggleClass("isFloating",t.is_floating),t.is_floating||t.optDiv.css("height",""),t.optDiv.toggleClass("okCancelInMulti",l.okCancelInMulti&&!t.is_floating)},vRange:function(e){var t=this;if(opts=t.E.children("option"),opts.length<=e||0>e)throw"index out of bounds";return t},toggSel:function(e,t){var l=this.vRange(t);l.E.children("option")[t].disabled||(l.E.children("option")[t].selected=e,l.mob||l.optDiv.find("ul.options li").eq(t).toggleClass("selected",e),l.setText())},toggDis:function(e,t){var l=this.vRange(t);l.E.children("option")[t].disabled=e,e&&(l.E.children("option")[t].selected=!1),l.mob||l.optDiv.find("ul.options li").eq(t).toggleClass("disabled",e).removeClass("selected"),l.setText()},toggSumo:function(e){var t=this;return t.enabled=e,t.select.toggleClass("disabled",e),e?(t.E.attr("disabled","disabled"),t.select.removeAttr("tabindex")):(t.E.removeAttr("disabled"),t.select.attr("tabindex","0")),t},toggSelAll:function(t){var i=this;i.E.find("option").each(function(l,s){i.E.find("option")[e(this).index()].disabled||(i.E.find("option")[e(this).index()].selected=t,i.mob||i.optDiv.find("ul.options li").eq(e(this).index()).toggleClass("selected",t),i.setText())}),!i.mob&&l.selectAll&&i.selAll.removeClass("partial").toggleClass("selected",t)},reload:function(){var t=this.unload();return e(t).SumoSelect(l)},unload:function(){var e=this;return e.select.before(e.E),e.E.show(),l.outputAsCSV&&e.is_multi&&e.select.find("input.HEMANT123").length&&e.E.attr("name",e.select.find("input.HEMANT123").attr("name")),e.select.remove(),delete t.sumo,t},add:function(l,i,s){if("undefined"==typeof l)throw"No value to add";var n=this;if(opts=n.E.children("option"),"number"==typeof i&&(s=i,i=l),"undefined"==typeof i&&(i=l),opt=e("<option></option>").val(l).html(i),opts.length<s)throw"index out of bounds";return"undefined"==typeof s||opts.length==s?(n.E.append(opt),n.mob||n.createLi(opt)):(opts.eq(s).before(opt),n.mob||n.createLi(opt,s)),t},remove:function(e){var t=this.vRange(e);t.E.children("option").eq(e).remove(),t.mob||t.optDiv.find("ul.options li").eq(e).remove(),t.setText()},selectItem:function(e){this.toggSel(!0,e)},unSelectItem:function(e){this.toggSel(!1,e)},selectAll:function(){this.toggSelAll(!0)},unSelectAll:function(){this.toggSelAll(!1)},disableItem:function(e){this.toggDis(!0,e)},enableItem:function(e){this.toggDis(!1,e)},enabled:!0,enable:function(){return this.toggSumo(!1)},disable:function(){return this.toggSumo(!0)},init:function(){var e=this;return e.createElems(),e.setText(),e}},t.sumo.init())});return 1==s.length?s[0]:s}}(jQuery);

$('#symptoms').SumoSelect({ triggerChangeCombined: true, placeholder: "Select Symptoms" });

$('#wanthelpwith').SumoSelect({ triggerChangeCombined: true, placeholder: "Select Issues" });

$('#workedinpast').SumoSelect({ triggerChangeCombined: true, placeholder: "Select Skills" });

var last_valid_selection = null;
$('#island').change(function (event) {
    if ($(this).val().length > 2) {
        alert('You can only choose 2!');
        var $this = $(this);
        $this[0].sumo.unSelectAll();
        $.each(last_valid_selection, function (i, e) {
            $this[0].sumo.selectItem($this.find('option[value="' + e + '"]').index());
        });
    } else {
        last_valid_selection = $(this).val();
    }
});

/*add list item to coping skills on profile page */
// function changeTextCopingSkills(){
//   var firstname = document.getElementById('txtcopingSkills').value;
//   var node=document.createElement("LI");
//   var textnode=document.createTextNode(firstname);
//   node.appendChild(textnode);
//   document.getElementById("copingSkills").appendChild(node);
// }

/*add coping skills */
$( "#jujubee1" ).click(function(e) {
  e.preventDefault();
  var cope1 = $( "#txtcopingSkills" ).val();
  $( "#copingSkills" ).append( '<span class="badge badge-pill bigfont pillpadding">' + cope1 + '</span>' + '<br>'  );
  removeSkill();
});
function removeSkill() {
	$( "#copingSkills span" ).click(function() {
  		$( this ).remove();
	});
}

/*add list item to goals on profile page */
$( "#jujubee2" ).click(function(e) {
  e.preventDefault();
  var goals1 = $( "#txtgoals" ).val();
  $( "#goals" ).append( '<span class="badge badge-pill bigfont pillpadding">' + goals1 + '</span>' + '<br>'  );
  removeGoal();
});
function removeGoal() {
	$( "#goals span" ).click(function() {
  		$( this ).remove();
	});
}


// function changeTextGoals(){
//   var firstname = document.getElementById('txtgoals').value;
//   var node=document.createElement("LI");
//   var textnode=document.createTextNode(firstname);
//   node.appendChild(textnode);
//   document.getElementById("goals").appendChild(node);
// }
