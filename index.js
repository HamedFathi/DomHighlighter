var DomHighlighter = (function () {
    function DomHighlighter() {
    }
    DomHighlighter.prototype.start = function (domHighlighterSetting, callback) {
        var _this = this;
        var domHLClass = 'domHighlighter';
        var settings = {
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
        $(settings.jqSelector).hover(function (e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            $(_this).addClass(domHLClass);
            $(_this).parent().removeClass(domHLClass);
            $(_this).parents().removeClass(domHLClass);
            var marginTop = parseFloat($(_this).css("margin-top"));
            var marginBottom = parseFloat($(_this).css("margin-bottom"));
            var marginLeft = parseFloat($(_this).css("margin-left"));
            var marginRight = parseFloat($(_this).css("margin-right"));
            var paddingTop = parseFloat($(_this).css("padding-top"));
            var paddingBottom = parseFloat($(_this).css("padding-bottom"));
            var paddingLeft = parseFloat($(_this).css("padding-left"));
            var paddingRight = parseFloat($(_this).css("padding-right"));
            var borderTopWidth = parseFloat($(_this).css("border-top-width"));
            var borderBottomWidth = parseFloat($(_this).css("border-bottom-width"));
            var borderLeftWidth = parseFloat($(_this).css("border-left-width"));
            var borderRightWidth = parseFloat($(_this).css("border-right-width"));
            var width = $(_this).width();
            var height = $(_this).height();
            var borderMarginTop = (borderTopWidth + marginTop) === 0
                ? '0'
                : '-' + (borderTopWidth + marginTop) + 'px';
            var borderMarginLeft = (borderLeftWidth + marginLeft) === 0
                ? '0'
                : '-' + (borderLeftWidth + marginLeft) + 'px';
            var allHeight = height +
                borderTopWidth +
                marginTop +
                paddingTop +
                paddingBottom +
                borderBottomWidth +
                marginBottom;
            var allWidth = width +
                borderLeftWidth +
                marginLeft +
                paddingLeft +
                borderRightWidth +
                marginRight +
                paddingRight;
            var borderTopStyle = borderTopWidth === 0 ? '' : 'border-top-style: solid !important;';
            var borderBottomStyle = borderBottomWidth === 0 ? '' : 'border-bottom-style: solid !important;';
            var borderLeftStyle = borderLeftWidth === 0 ? '' : 'border-left-style: solid !important;';
            var borderRightStyle = borderRightWidth === 0 ? '' : 'border-right-style: solid !important;';
            var allPaddings = $(_this).css('padding-top') +
                ' ' +
                $(_this).css('padding-right') +
                ' ' +
                $(_this).css('padding-bottom') +
                ' ' +
                $(_this).css('padding-left');
            var allMargins = $(_this).css('margin-top') +
                ' ' +
                $(_this).css('margin-right') +
                ' ' +
                $(_this).css('margin-bottom') +
                ' ' +
                $(_this).css('margin-left');
            var allBorders = $(_this).css('border-top-width') +
                ' ' +
                $(_this).css('border-right-width') +
                ' ' +
                $(_this).css('border-bottom-width') +
                ' ' +
                $(_this).css('border-left-width');
            var style = "<style id='domHLid'>.domHighlighter{border-color:" + settings.borderColor + "!important;" +
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
            var tagName = settings.showTagName ? $(_this).prop("tagName").toLowerCase() : '';
            var rawClasses = '.' + $(_this).attr("class").split(' ').join(' .');
            if (settings.filterClasses != null && settings.filterClasses != undefined) {
                for (var _i = 0, _a = settings.filterClasses; _i < _a.length; _i++) {
                    var filter = _a[_i];
                    rawClasses.replace('.' + filter.trim(), '');
                }
            }
            var classes = settings.showClasses ? rawClasses.trim() : '';
            var tagId = settings.showId ? ($(_this).prop("id").length > 0 ? '#' + $(_this).prop("id") : '') : '';
            if (settings.showDialog) {
                $.notify.addStyle('domHLStyle', {
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
                $(_this).notify(' ', {
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
        }, function () {
            $('*').mouseleave(function () {
                $('*').removeClass(domHLClass);
                $('*').remove('#domHLid');
                $('.notifyjs-wrapper').remove();
                $.notify.removeStyle('domHLStyle');
            });
        });
    };
    ;
    DomHighlighter.prototype.stop = function () {
        $('*').removeClass('domHighlighter');
        $('*').remove('#domHLid');
        $('.notifyjs-wrapper').remove();
        $.notify.removeStyle('domHLStyle');
        $('*').off('mouseenter mouseleave');
        $('*').unbind('mouseenter').unbind('mouseleave');
    };
    return DomHighlighter;
}());
