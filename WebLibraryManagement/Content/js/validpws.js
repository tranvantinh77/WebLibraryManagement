var core_validpws = {
    checkStrength: function (idAppend, elmPWS, lang) {
        var isVN = lang.indexOf('en-us') < 0 ? true : false;
        var idelm = '#' + idAppend;
        var strength = 0;
        var password = elmPWS.value;
        if (password.length < 6) {
            $(idelm).removeClass()
            $(idelm).addClass('Short');
            return isVN ? 'Quá ngắn' : 'Too short'
        }
        if (password.length > 7) strength += 1
        // If password contains both lower and uppercase characters, increase strength value.  
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
        // If it has numbers and characters, increase strength value.  
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
        // If it has one special character, increase strength value.  
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
        // If it has two special characters, increase strength value.  
        if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
        // Calculated strength value, we can return messages  
        // If value is less than 2  
        if (strength < 2) {
            $(idelm).removeClass()
            $(idelm).addClass('Weak');
            return isVN ? 'Yếu' : 'Weak';
        } else if (strength == 2) {
            $(idelm).removeClass()
            $(idelm).addClass('Medium');
            return isVN ? 'Trung bình' : 'Medium';
        } else {
            $(idelm).removeClass()
            $(idelm).addClass('High')
            return isVN ? 'Mạnh' : 'High';
        }
    },
    checkLenghtQuestion: function (elm, lang) {
        var isVN = lang.indexOf('en-us') < 0 ? true : false;
        var count = elm.value;
        if (typeof count == "undefined") { return notifi.html(""); }
        var notifi = $($(elm).attr("toggle"));
        var _len = (20 - count.length);
        var txtMsg = '';
        if (_len > 0) {
            txtMsg = (isVN ? 'Số ký tự còn lại ' : 'Character limit to ') + _len;
        }     
        notifi.html(txtMsg);       
    },
    removeNotifiCharacter: function () {
        console.log(1);
        $('.qst-cter').empty();
    },
    showPassword: function (elm) {
        $(elm).children().toggleClass('fa-eye fa-eye-slash');
        var input = $($(elm).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    }
}