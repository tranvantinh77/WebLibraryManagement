var core_services = {

    dateFormat: function (date, format) {
        /// <summary>
        /// hàm thực hiện chuyển ngày tháng thành dạng chuỗi theo format
        /// DD: ngày 01 -> 31
        /// MM: tháng 01 -> 12
        /// YYYY: năm 1900 -> ....
        /// hh: giờ 00 -> 23
        /// mm: phút 00 -> 59
        /// ss: giây 00 -> 59
        /// ms: mili giây 0 -> 100
        /// </summary>
        /// <param name="date">thời gian</param>
        /// <param name="format">các dạng format</param>
        if (date == null)
            return "";
        format = format.replace("DD", (date.getDate() < 10 ? '0' : '') + date.getDate()); // Pad with '0' if needed
        format = format.replace("MM", (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1)); // Months are zero-based
        format = format.replace("YYYY", date.getFullYear());
        format = format.replace("hh", (date.getHours() < 10 ? '0' : '') + date.getHours()); // Pad with '0' if needed
        format = format.replace("ms", date.getMilliseconds());
        format = format.replace("mm", (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()); // Pad with '0' if needed
        format = format.replace("ss", (date.getSeconds() < 10 ? '0' : '') + date.getSeconds()); // Pad with '0' if needed

        return format;
    },

    addDays: function (days) {
        var date = new Date();
        date.setDate(date.getDate() + days);
        return date;
    },

    getNewGuid: function () {
        var S4 = function () {
            return Math.floor(
                Math.random() * 0x10000 /* 65536 */
            ).toString(16);
        };

        return (
            S4() + S4() + "-" +
            S4() + "-" +
            S4() + "-" +
            S4() + "-" +
            S4() + S4() + S4()
        );
    },

    get: function (urlMethod, dataString, onGetSuccess, onGetError) {
        /// <summary>
        /// hàm gọi service theo phương thức get
        /// </summary>
        /// <param name="urlMethod"> địa chỉ service +  tên phương thức gọi </param>
        /// <param name="dataString"> dữ liệu đối số theo kiểu json </param>
        /// <param name="onGetSuccess"> hàm call back khi gọi thành công</param>
        /// <param name="onGetError"> hàm call back khi thất bại </param>
        $.ajax({
            type: "GET",
            url: urlMethod,
            cache: false,
            contentType: "application/json; charset=utf-8",
            data: dataString,
            dataType: "json",
            success: onGetSuccess,
            error: onGetError
        });
    },

    post: function (urlMethod, dataString, onPostSuccess, onPostError) {
        /// <summary>
        /// hàm gọi service theo phương thức post
        /// </summary>
        /// <param name="urlMethod"> địa chỉ service +  tên phương thức gọi </param>
        /// <param name="dataString"> dữ liệu đối số theo kiểu json </param>
        /// <param name="onGetSuccess"> hàm call back khi gọi thành công</param>
        /// <param name="onGetError"> hàm call back khi thất bại </param>

        $.ajax({
            type: "POST",
            url: urlMethod,
            async: false,
            cache: false,
            contentType: "application/json; charset=utf-8",
            data: dataString,
            dataType: "json",
            success: onPostSuccess,
            error: onPostError
        });
    },

    postAsync: function (urlMethod, dataString, onPostSuccess, onPostError) {
        /// <summary>
        /// hàm gọi service theo phương thức post
        /// </summary>
        /// <param name="urlMethod"> địa chỉ service +  tên phương thức gọi </param>
        /// <param name="dataString"> dữ liệu đối số theo kiểu json </param>
        /// <param name="onGetSuccess"> hàm call back khi gọi thành công</param>
        /// <param name="onGetError"> hàm call back khi thất bại </param>

        $.ajax({
            type: "POST",
            url: urlMethod,
            async: true,
            cache: false,
            contentType: "application/json; charset=utf-8",
            data: dataString,
            dataType: "json",
            success: onPostSuccess,
            error: onPostError
        });
    },

    postXML: function (urlMethod, dataString, onPostSuccess, onPostError) {
        /// <summary>
        /// hàm gọi service theo phương thức get
        /// </summary>
        /// <param name="urlMethod"> địa chỉ service +  tên phương thức gọi </param>
        /// <param name="dataString"> dữ liệu đối số theo kiểu json </param>
        /// <param name="onGetSuccess"> hàm call back khi gọi thành công</param>
        /// <param name="onGetError"> hàm call back khi thất bại </param>
        $.ajax({
            type: "POST",
            url: urlMethod,
            cache: false,
            contentType: "application/json; charset=utf-8",
            data: dataString,
            dataType: "xml",
            success: onPostSuccess,
            error: onPostError
        });
    },

    postSoap: function (urlMethod, dataString, onPostSuccess, onPostError) {
        /// <summary>
        /// hàm gọi service theo phương thức get theo kieusoap
        /// </summary>
        /// <param name="urlMethod"> địa chỉ service +  tên phương thức gọi </param>
        /// <param name="dataString"> dữ liệu đối số theo kiểu json </param>
        /// <param name="onGetSuccess"> hàm call back khi gọi thành công</param>
        /// <param name="onGetError"> hàm call back khi thất bại </param>
        $.ajax({
            type: "POST",
            url: urlMethod,
            cache: false,
            contentType: "text/xml",
            data: dataString,
            dataType: "xml",
            success: onPostSuccess,
            error: onPostError
        });
    },

    stringify: function stringify(obj) {
        if ("JSON" in window) {
            return JSON.stringify(obj);
        }

        var t = typeof (obj);
        if (t != "object" || obj === null) {
            // simple data type
            if (t == "string") obj = '"' + obj + '"';

            return String(obj);
        } else {
            // recurse array or object
            var n, v, json = [], arr = (obj && obj.constructor == Array);

            for (n in obj) {
                v = obj[n];
                t = typeof (v);
                if (obj.hasOwnProperty(n)) {
                    if (t == "string") {
                        v = '"' + v + '"';
                    } else if (t == "object" && v !== null) {
                        v = jQuery.stringify(v);
                    }

                    json.push((arr ? "" : '"' + n + '":') + String(v));
                }
            }

            return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
        }
    },

    replaceCurrentURL: function (queryString, valueOld, valueNew) {
        /// <summary>
        /// hàm thay thế URL
        /// </summary>
        /// <param name="queryString"> tham số </param>
        /// <param name="valueOld"> giá trị cũ </param>
        /// <param name="valueNew"> giá trị mới </param>
        var url = window.location.href;
        var urlNew = '';
        if (url.indexOf("?") != -1) {
            urlNew = (url.indexOf(queryString.toLowerCase()) != -1) ? url.replace(queryString + valueOld, queryString + valueNew) : url + '&' + queryString.toLowerCase() + valueNew;
        }
        else {
            urlNew = url + '?' + queryString.toLowerCase() + valueNew;
        }
        history.pushState('', '', urlNew);
    },

    refreshButton: function (classCheckbox, strButtonId) {
        /// <summary>
        /// hàm ẩn hiện button
        /// </summary>
        /// <param name="classCheckbox"> class của checkbox (chọn tất cả) </param>
        /// <param name="strButtonId"> chuỗi Id của button ("#btnNew,#btnEdit") </param>
        ($('input:checkbox[name="' + classCheckbox.replace('.', '') + '"]:checked').length > 0) ? $(strButtonId).fadeIn() : $(strButtonId).fadeOut();
    },

    checkAll: function (idCheckbox, classCheckbox, strButtonId) {
        /// <summary>
        /// hàm check tất cả checkbox của table
        /// </summary>
        /// <param name="idCheckbox"> id của checkbox (chọn tất cả) </param>
        /// <param name="classCheckbox"> class của các checkbox con </param>
        /// <param name="strButtonId"> chuỗi Id của button ("#btn-rm-edit,#btn-rm-delete") </param>
        ($(idCheckbox).is(":checked")) ? ($(classCheckbox).each(function () { this.checked = true; })) : ($(classCheckbox).each(function () { this.checked = false; }));

        //Gắn Event trên mỗi checkbox
        $(idCheckbox).change(function () {
            if (this.checked) {
                $(classCheckbox).each(function () { this.checked = true; });
            }
            else {
                $(classCheckbox).each(function () { this.checked = false; });
            }
            core_services.refreshButton(classCheckbox, strButtonId);
        });
        $('input:checkbox[name="' + classCheckbox.replace('.', '') + '"]').change(function () {
            core_services.refreshButton(classCheckbox, strButtonId);
        })

        core_services.refreshButton(classCheckbox, strButtonId);
    },
    getValueCheckBox: function (name) {
        /// <summary>
        /// hàm get tất cả value của checkbox
        /// </summary>
        /// <param name="name"> name của checkbox</param>
        return $('input:checkbox[name="' + name + '"]:checked').map(function () { return $(this).val(); }).get()
    },

    loadPopup: function (idPopup, isReload) {
        /// <summary>
        /// hàm load Modal/Popup/Dialog
        /// </summary>
        /// <param name="idPopup"> id của Popup </param>
        /// <param name="isReload"> Có reload page ? </param>
        $('body').on('click', '.' + idPopup, function (e) {
            e.preventDefault();
            $(this).attr('data-target', '#' + idPopup);
            $(this).attr('data-toggle', 'modal');
        });
        $('body').on('click', '.modal-close-btn', function () {
            if (isReload == undefined || isReload == true) {
                location.reload();
            }
        });
        $('#' + idPopup).on('hidden.bs.modal', function () {
            if (isReload == undefined || isReload == true) {
                location.reload();
            }
        });
    },

    loadPopupDynamic: function (idControl, idPopup, url) {
        /// <summary>
        /// hàm load Modal/Popup/Dialog động
        /// </summary>
        /// <param name="idControl"> id của Button </param>
        /// <param name="idPopup"> id của Popup </param>
        /// <param name="url"> url </param>
        $('#' + idControl).attr("href", url);
        $('#' + idControl).attr('data-target', '#' + idPopup);
        $('#' + idControl).attr('data-toggle', 'modal');
    },

    getParamValue: function (paramName) {
        /// <summary>
        /// lấy giá trị URL theo paramName
        /// </summary>
        /// <param name="paramName"> tham số </param>
        var pageIndex = 1;
        var param = window.location.search;
        if (param != undefined && param.indexOf(paramName) != -1) {
            pageIndex = parseInt(param.split(paramName)[1]);
        }
        return pageIndex;
    },

    getIdChecked: function (classCheckbox, attr) {
        /// <summary>
        /// hàm ẩn lấy Id checked
        /// </summary>
        /// <param name="classCheckbox"> class của checkbox (chọn tất cả) </param>
        /// <param name="attr"> attr chứa Id </param>
        var lstId = [];
        $('input:checkbox[name="' + classCheckbox.replace('.', '') + '"]:checked').each(function (i, item) {
            lstId[i] = $(this).parent().parent().parent().attr(attr);
        });
        return lstId;
    },

    refreshRegisterTotal: function (url) {

        core_services.postAsync(url, JSON.stringify(),
            function (result) {
                $('#lbl-hp-totalregister').html(result.total);
                $('#lbl-hp-totalregister').parent().addClass('add-basket');
                setTimeout(function () {
                    $('#lbl-hp-totalregister').parent().removeClass('add-basket');
                }, 2000); //waiting 2 seconds
            },
            function (xmlHttpRequest) {
            }
        );
    },

    postAutocomplete: function (idInput, urlMethod, dataString, onPostSuccess, onPostError, onPostSelect) {
        $(idInput).autocomplete({
            source: function (request, response) {
                core_services.postAsync(urlMethod, dataString, onPostSuccess, onPostError);
            },
            change: function (event, ui) {
                if (ui.item == null || ui.item == undefined) {
                    $(this).val("");
                }
            },
            minLength: 2,
            select: onPostSelect,
            open: function () {
                $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
            },
            close: function () {
                $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
            }
        });
    },

    deletePickUser: function (element) {
        var id = $(element).attr("elementId");
        var userName = $(element).attr("userName");
        // delete User
        if ($("#" + id).val().indexOf(";" + userName) > -1)
            $("#" + id).val($("#" + id).val().replace(";" + userName, ""));
        if ($("#" + id).val().indexOf(userName + ";") > -1)
            $("#" + id).val($("#" + id).val().replace(userName + ";", ""));
        else if ($("#" + id).val() == userName)
            $("#" + id).val($("#" + id).val().replace(userName, ""));
        $(element).closest("li").remove();
    },

    checkPickUser: function (element, urlUserInfoGetByUserName, type) {
        var id = $(element).attr("elementId");
        var textUsers = $("#userInput" + id);
        $.getJSON(urlUserInfoGetByUserName, { userNames: textUsers.val() }, function (data) {
            var items = "";
            $.each(data, function (i, user) {
                if ($("#" + id).val().indexOf(user.Value) <= -1 && $("#" + id).val() != user.Value && (type != "single" || (type == "single" && $("#" + id).val() == ''))) {
                    items += "<li class='search-choice'><span>" + user.Text + "</span><a class='search-choice-close' onclick='core_services.deletePickUser(this)' elementId='" + id + "' userName='" + user.Value + "'></a></li>";
                    if ($("#" + id).val() == "")
                        $("#" + id).val(user.Value);
                    else
                        $("#" + id).val($("#" + id).val() + ";" + user.Value);
                }
            });
            $("#userSelect" + id).prepend(items);
            $("#userInput" + id).val("");
        });
    },
};

MenuLeftProgress = function () {
    var pathname = window.location.pathname
        .replace('/vi-vn', '')
        .replace('/en-us', '')
        .replace('/VI-VN', '')
        .replace('/EN-US', '')
        .replace('/admin', '');
    if (pathname != undefined && pathname != "" && pathname != "/") {
        var strPathname = pathname.split('/');
        var controller = strPathname[1].toLowerCase();
        var action = (strPathname[2]) ? strPathname[2].toLowerCase() : "";
        if (controller != undefined && controller != "" && action != undefined && action != "") {
            if (controller != "doextension" && action != "debitnotes") {
                //Chọn node cha của URL
                $('#nav-' + controller).addClass('active open');
                $('#nav-' + controller).find('a').append('<span class="selected"></span>');
            }
            //Đổi icon đóng mở
            $('#nav-span-' + controller).addClass('open');
            //Chọn node theo URL 
            $('#nav-' + controller + "-" + action).addClass('active open');
            //Mở node cha của URL
            $('#nav-' + controller + "-" + action).parent().parent().addClass('active open');
            //Đổi icon đóng mở node cha của URL
            $('#nav-' + controller + "-" + action).parent().parent().find('a').children('.arrow').addClass('open');
        }
    }
    else {
        $('#nav-home').find('a').append('<span class="selected"></span>');
        $('#nav-home').addClass('active open');
    }
};

String.format = function () {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i + 1]);
    }
    return s;
};

ShowLoading = function () {
    $('#element-loading').fadeIn();
};

HideLoading = function () {
    setTimeout(function () {
        $('#element-loading').fadeOut();
    }, 10); //waiting 1 seconds
};

ShowProgressBar = function () {
    $('#element-progress').css('display', 'block');
    $('#element-progress-click').click();
};

HideProgressBar = function () {
    $('#element-progress').css('display', 'none');
};

ChangeLanguage = function (langOld, langNew) {
    var pathname = window.location.pathname.replace('/admin', '');
    var langCodeOld = '/' + langOld;
    var langCodeNew = '/' + langNew;
    if (window.location.href.indexOf(langCodeOld) != -1) {
        window.location.href = window.location.href.replace(langCodeOld, langCodeNew);
    }
    else {
        window.location.href = window.location.protocol + '//' + window.location.host + '/' + langNew + pathname + window.location.search;
    }
};

//var timeInSecondsAfterSessionOut = 300; //second
//var secondTick = 0;

//ResetThisSession = function () {
//    secondTick = 0;
//};

//StartThisSessionTimer = function () {
//    secondTick++;
//    var timeLeft = ((timeInSecondsAfterSessionOut - secondTick) / 60).toFixed(0);
//    timeLeft = timeInSecondsAfterSessionOut - secondTick;

//    console.log(timeLeft);

//    if (secondTick > timeInSecondsAfterSessionOut) {
//        clearTimeout(tick);
//        var pathname = window.location.pathname.replace('/vi-vn', '').replace('/en-us', '').replace('/VI-VN', '').replace('/EN-US', '');
//        if (pathname != undefined && pathname != "" && pathname != "/") {
//            var strPathname = pathname.split('/');
//            var controller = strPathname[1];
//            var action = strPathname[2];
//            if ((controller.toLowerCase() == "account" && action.toLowerCase() == "login") ||
//                (controller.toLowerCase() == "customer" && action.toLowerCase() == "register")) {
//                return;
//            }
//            else {
//                AutoLogOff();
//            }
//        }
//        else {
//            AutoLogOff();
//        }
//    }

//    tick = setTimeout("StartThisSessionTimer()", 1000);
//};

//AutoLogOff = function () {
//    window.location.href = '/account/autologoff';
//    return;
//};

DetectIEBrowser = function () {

    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10) > 11 ? true : false;
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10) > 11 ? true : false;
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10) > 11 ? true : false;
    }

    // other browser
    return true;
};

if (App.isAngularJsApp() === false) {
    jQuery(document).ready(function () {
        $('.core-dl-select2').select2({ width: 'resolve' });
        $('.partialContents').each((index, content) => {
            var url = $(content).data('url');
            if (url != null && url.length > 0) {
                $(content).load(url);
            }
        })
        MenuLeftProgress();
        //StartThisSessionTimer();

        if (!DetectIEBrowser()) {
            bootbox.dialog({
                message: "<p class='text-center mb-0'>We're sorry but your browser is not supported. </p><p class='text-center mb-0'>Please use Microsoft Edge or Google Chrome to navigate system.</p>",
                closeButton: false
            });
        }
    });
}

//$(function () {
//    //mouseover
//    $("body").on('click keypress', function () {
//        ResetThisSession();
//    });
//    $(document).scroll(function (e) {
//        ResetThisSession();
//    });
//});

window['$$$changePass'] = {
    onChangePass: function () {
        ShowLoading();
        $.get('/usermanagement/changepassword')
            .done(function (html) {
                console.log(html);
                $("#popupPageDetailIndex").empty();
                $("#popupPageDetailIndex").html(html);
                HideLoading();
                setTimeout(() => {
                    $('#stackPopupIndex').modal('show');
                }, 300)
            }, 'html')
            .fail(function () {
                HideLoading();
            });
    },
    onChangePassSuccess: function (res) {
        HideLoading();
        if (res.IsSuccess) {
            core_notification.updateSuccess();
            setTimeout(() => {
                $('#stackPopupIndex').modal('hide');
                core_lstpage.onReload();
            }, 300);
        }
        else {
            core_notification.updateFail();
            setTimeout(() => {
                core_notify.status(2).msg(res.Msg).done();
            }, 500)
        }
    },
    onChangePassFail: function () {
        core_notification.updateFail();
    }
}