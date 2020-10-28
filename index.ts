interface Setting {
  jqSelector?: string;
  elementPosition?: string;
  showDialog?: boolean;
  dialogHtml?: string;
  marginColor?: string;
  paddingColor?: string;
  borderColor?: string;
  elementColor?: string;
  dialogColor?: string;
  dialogBorderColor?: string;
  showTagName?: boolean;
  showId?: boolean;
  showClasses?: boolean;
  filterClasses?: string[]
}

interface ElementInfo {
  margin: string;
  padding: string;
  border: string;
  tagName: string;
  tagId: string;
  tagClasses: string[];
}

class DomHighlighter {

  public start(domHighlighterSetting?: Setting, callback?: (data: ElementInfo) => any): void {
    let domHLClass: string = 'domHighlighter';
    let settings: Setting = {
      jqSelector: '*',
      elementPosition: 'bottom left',
      borderColor: '#FDDD9B',
      elementColor: '#8BB5C0',
      paddingColor: '#C2CF8A',
      marginColor: '#F9CC9D',
      dialogColor: '#F0F8FF',
      dialogBorderColor: '#BAC2C9',
      showTagName: true,
      showId: true,
      showClasses: true,
      showDialog: true,
      filterClasses: [],
      dialogHtml: ''
    };
    if (domHighlighterSetting != null || domHighlighterSetting != undefined) {
      settings.jqSelector =
        (domHighlighterSetting.jqSelector == null || domHighlighterSetting.jqSelector == undefined || domHighlighterSetting.jqSelector.length == 0)
          ? settings.jqSelector : domHighlighterSetting.jqSelector;
      settings.elementPosition =
        (domHighlighterSetting.elementPosition == null || domHighlighterSetting.elementPosition == undefined || domHighlighterSetting.elementPosition.length == 0)
          ? settings.elementPosition : domHighlighterSetting.elementPosition;
      settings.borderColor =
        (domHighlighterSetting.borderColor == null || domHighlighterSetting.borderColor == undefined || domHighlighterSetting.borderColor.length == 0)
          ? settings.borderColor : domHighlighterSetting.borderColor;
      settings.elementColor =
        (domHighlighterSetting.elementColor == null || domHighlighterSetting.elementColor == undefined || domHighlighterSetting.elementColor.length == 0)
          ? settings.elementColor : domHighlighterSetting.elementColor;
      settings.paddingColor =
        (domHighlighterSetting.paddingColor == null || domHighlighterSetting.paddingColor == undefined || domHighlighterSetting.paddingColor.length == 0)
          ? settings.paddingColor : domHighlighterSetting.paddingColor;
      settings.marginColor =
        (domHighlighterSetting.marginColor == null || domHighlighterSetting.marginColor == undefined || domHighlighterSetting.marginColor.length == 0)
          ? settings.marginColor : domHighlighterSetting.marginColor;
      settings.dialogColor =
        (domHighlighterSetting.dialogColor == null || domHighlighterSetting.dialogColor == undefined || domHighlighterSetting.dialogColor.length == 0)
          ? settings.dialogColor : domHighlighterSetting.dialogColor;
      settings.dialogBorderColor =
        (domHighlighterSetting.dialogBorderColor == null || domHighlighterSetting.dialogBorderColor == undefined || domHighlighterSetting.dialogBorderColor.length == 0)
          ? settings.dialogBorderColor : domHighlighterSetting.dialogBorderColor;
      settings.showTagName =
        (domHighlighterSetting.showTagName == null || domHighlighterSetting.showTagName == undefined)
          ? settings.showTagName : domHighlighterSetting.showTagName;
      settings.showId =
        (domHighlighterSetting.showId == null || domHighlighterSetting.showId == undefined)
          ? settings.showId : domHighlighterSetting.showId;
      settings.showClasses =
        (domHighlighterSetting.showClasses == null || domHighlighterSetting.showClasses == undefined)
          ? settings.showClasses : domHighlighterSetting.showClasses;
      settings.showDialog =
        (domHighlighterSetting.showDialog == null || domHighlighterSetting.showDialog == undefined)
          ? settings.showDialog : domHighlighterSetting.showDialog;
      settings.dialogHtml =
        (domHighlighterSetting.dialogHtml == null || domHighlighterSetting.dialogHtml == undefined || domHighlighterSetting.dialogHtml.length == 0)
          ? settings.dialogHtml : domHighlighterSetting.dialogHtml;
      settings.filterClasses =
        (domHighlighterSetting.filterClasses == null || domHighlighterSetting.filterClasses == undefined || domHighlighterSetting.filterClasses.length == 0)
          ? settings.filterClasses : domHighlighterSetting.filterClasses;
    }

    $(settings.jqSelector).hover(e => {

      e.stopImmediatePropagation();
      e.stopPropagation();
      $(this).addClass(domHLClass);
      $(this).parent().removeClass(domHLClass);
      $(this).parents().removeClass(domHLClass);

      let marginTop = parseFloat($(this).css("margin-top"));
      let marginBottom = parseFloat($(this).css("margin-bottom"));
      let marginLeft = parseFloat($(this).css("margin-left"));
      let marginRight = parseFloat($(this).css("margin-right"));
      let paddingTop = parseFloat($(this).css("padding-top"));
      let paddingBottom = parseFloat($(this).css("padding-bottom"));
      let paddingLeft = parseFloat($(this).css("padding-left"));
      let paddingRight = parseFloat($(this).css("padding-right"));
      let borderTopWidth = parseFloat($(this).css("border-top-width"));
      let borderBottomWidth = parseFloat($(this).css("border-bottom-width"));
      let borderLeftWidth = parseFloat($(this).css("border-left-width"));
      let borderRightWidth = parseFloat($(this).css("border-right-width"));
      let width = $(this).width();
      let height = $(this).height();


      let borderMarginTop = (borderTopWidth + marginTop) === 0
        ? '0'
        : '-' + (borderTopWidth + marginTop) + 'px';

      let borderMarginLeft = (borderLeftWidth + marginLeft) === 0
        ? '0'
        : '-' + (borderLeftWidth + marginLeft) + 'px';

      let allHeight = height +
        borderTopWidth +
        marginTop +
        paddingTop +
        paddingBottom +
        borderBottomWidth +
        marginBottom;

      let allWidth = width +
        borderLeftWidth +
        marginLeft +
        paddingLeft +
        borderRightWidth +
        marginRight +
        paddingRight;


      let borderTopStyle = borderTopWidth === 0 ? '' : 'border-top-style: solid !important;';
      let borderBottomStyle = borderBottomWidth === 0 ? '' : 'border-bottom-style: solid !important;';
      let borderLeftStyle = borderLeftWidth === 0 ? '' : 'border-left-style: solid !important;';
      let borderRightStyle = borderRightWidth === 0 ? '' : 'border-right-style: solid !important;';


      let allPaddings = $(this).css('padding-top') +
        ' ' +
        $(this).css('padding-right') +
        ' ' +
        $(this).css('padding-bottom') +
        ' ' +
        $(this).css('padding-left');
      let allMargins = $(this).css('margin-top') +
        ' ' +
        $(this).css('margin-right') +
        ' ' +
        $(this).css('margin-bottom') +
        ' ' +
        $(this).css('margin-left');
      let allBorders = $(this).css('border-top-width') +
        ' ' +
        $(this).css('border-right-width') +
        ' ' +
        $(this).css('border-bottom-width') +
        ' ' +
        $(this).css('border-left-width');


      let style =
        "<style id='domHLid'>.domHighlighter{border-color:" + settings.borderColor + "!important;" +
        borderTopStyle +
        borderBottomStyle +
        borderLeftStyle +
        borderRightStyle +
        "background-image: linear-gradient(to bottom, " + settings.elementColor + " 0, " + settings.elementColor + " 100%), linear-gradient(to bottom, " + settings.paddingColor + " 0," + settings.paddingColor + " 100%) !important; -moz-background-clip: content-box, padding-box !important; -webkit-background-clip: content-box, padding-box !important; background-clip: content-box, padding-box !important; position: relative !important; } .domHighlighter:before {content: '';background-color: " + settings.marginColor + ";top:" +
        borderMarginTop +
        ";left:" +
        borderMarginLeft +
        ";right: 0;bottom: 0;height: " +
        allHeight +
        "px;width: " +
        allWidth +
        "px;position: absolute;z-index: -99999999;}</style>";

      $('head').append(style);
      $('.notifyjs-wrapper').remove();
      $.notify.removeStyle('domHLStyle');
      let tagName = settings.showTagName ? $(this).prop("tagName").toLowerCase() : '';

      let rawClasses = '.' + $(this).attr("class").split(' ').join(' .');

      if (settings.filterClasses != null && settings.filterClasses != undefined) {
        for (let filter of settings.filterClasses) {
          rawClasses.replace('.' + filter.trim(), '');
        }
      }
      let classes = settings.showClasses ? rawClasses.trim() : '';
      let tagId = settings.showId ? ($(this).prop("id").length > 0 ? '#' + $(this).prop("id") : '') : '';
      if (settings.showDialog) {
        $.notify.addStyle('domHLStyle',
          {
            html: settings.dialogHtml.length > 0 ? settings.dialogHtml :
              (' <div align="left" style="background-color:' + settings.dialogColor
                + ';border: 1px solid ' + settings.dialogBorderColor + '"><div><span style="font-weight: bold">' +
                tagName +
                tagId +
                ' ' +
                classes +
                '</span></div><div><span style="background:' + settings.elementColor + ';padding:2px;">Element</span><span style="margin-left:5px">' +
                width +
                ' x ' +
                height +
                '</span></div><div><span style="background:' + settings.paddingColor + ';padding:2px;">Padding</span><span style="margin-left:5px">' +
                allPaddings +
                '</span></div><div><span style="background: ' + settings.borderColor + ';padding:2px 11px 2px 2px;">Border</span><span style="margin-left:5px">' +
                allBorders +
                '</span></div><div><span style="background: ' + settings.marginColor + ';padding:2px 10px 2px 2px;">Margin</span><span style="margin-left:5px">' +
                allMargins +
                '</span></div></div>'),
            classes: {
              base: {
                "white-space": "nowrap",
                "padding": "5px",
                "border-radius": "0"

              }
            }
          });

        $(this).notify(
          ' ',
          {
            clickToHide: false,
            autoHide: true,
            autoHideDelay: 0,
            arrowShow: false,
            arrowSize: 0,
            elementPosition: settings.elementPosition,
            globalPosition: settings.elementPosition,
            className: 'info',
            showAnimation: 'fadeIn',
            showDuration: 0,
            hideAnimation: 'fadeOut',
            hideDuration: Number.MAX_VALUE,
            gap: 2,
            style: 'domHLStyle'
          });
      }


      if (callback != null || callback != undefined) {
        callback({
          margin: allMargins,
          padding: allPaddings,
          border: allBorders,
          tagName: tagName,
          tagId: tagId,
          tagClasses: (classes != null && classes != undefined && classes.length > 0) ? classes.substring(1).split(' ') : []
        });
      }



    }, () => {
      $('*').mouseleave(function () {
        $('*').removeClass(domHLClass);
        $('*').remove('#domHLid');
        $('.notifyjs-wrapper').remove();
        $.notify.removeStyle('domHLStyle');
      });
    }
    )
  };

  public stop(): void {
    $('*').removeClass('domHighlighter');
    $('*').remove('#domHLid');
    $('.notifyjs-wrapper').remove();
    $.notify.removeStyle('domHLStyle');
    $('*').off('mouseenter mouseleave');
    $('*').unbind('mouseenter').unbind('mouseleave');
  }

}