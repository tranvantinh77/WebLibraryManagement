using System.Web;
using System.Web.Optimization;

namespace WebLibraryManagement
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            const string content = "~/Content/";

            #region Script

            //Respond
            bundles.Add(new ScriptBundle("~/bundles/respond").Include(content +
                        "assets/global/plugins/respond.min.js"
                        ));
            //Excanvas
            bundles.Add(new ScriptBundle("~/bundles/excanvas").Include(content +
                        "assets/global/plugins/excanvas.min.js"));
            //IE8 Fix
            bundles.Add(new ScriptBundle("~/bundles/ie8fix").Include(content +
                      "assets/global/plugins/ie8.fix.min.js"));
            //Jquery
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(content +
                      "assets/global/plugins/jquery.min.js"));
            //Bootstrap
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(content +
                      "assets/global/plugins/bootstrap/js/bootstrap.min.js"));
            //Js Cookie
            bundles.Add(new ScriptBundle("~/bundles/jscookie").Include(content +
                      "assets/global/plugins/js.cookie.min.js"));
            //Jquery Slimscroll
            bundles.Add(new ScriptBundle("~/bundles/jqueryslimscroll").Include(content +
                      "assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js"));
            //Jquery Blockui
            bundles.Add(new ScriptBundle("~/bundles/jqueryblockui").Include(content +
                      "assets/global/plugins/jquery.blockui.min.js"));
            //Bootstrap Switch
            bundles.Add(new ScriptBundle("~/bundles/bootstrapswitch").Include(content +
                      "assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js"));
            //App
            bundles.Add(new ScriptBundle("~/bundles/app").Include(content +
                      "assets/global/scripts/app.min.js"));
            //Layout
            bundles.Add(new ScriptBundle("~/bundles/layout").Include(content +
                      "assets/layouts/layout/scripts/layout.min.js"));
            //Demo
            bundles.Add(new ScriptBundle("~/bundles/demo").Include(content +
                      "assets/layouts/layout/scripts/demo.min.js"));
            //Quick Sidebar
            bundles.Add(new ScriptBundle("~/bundles/quicksidebar").Include(content +
                      "assets/layouts/global/scripts/quick-sidebar.min.js"));
            //Quick Nav
            bundles.Add(new ScriptBundle("~/bundles/quicknav").Include(content +
                      "assets/layouts/global/scripts/quick-nav.min.js"));
            //Icheck
            bundles.Add(new ScriptBundle("~/bundles/icheck").Include(content +
                      "assets/global/plugins/icheck/icheck.min.js"));
            //Counterup waypoints
            bundles.Add(new ScriptBundle("~/bundles/counterup").Include(content +
                      "assets/global/plugins/counterup/jquery.waypoints.min.js", content +
                      "assets/global/plugins/counterup/jquery.counterup.min.js"));
            //Jstree
            bundles.Add(new ScriptBundle("~/bundles/jstree").Include(content +
                      "assets/global/plugins/jstree/dist/jstree.min.js"));
            //Bootstrap Datepicker
            bundles.Add(new ScriptBundle("~/bundles/bootstrapdatepicker").Include(content +
                      "assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js", content +
                      "js/moment.js", content +
                      "js/moment-with-locales.js"));
            //Form Icheck
            bundles.Add(new ScriptBundle("~/bundles/formicheck").Include(content +
                      "assets/pages/scripts/form-icheck.min.js"));

            //Components Datetime Pickers
            bundles.Add(new ScriptBundle("~/bundles/componentsdatetimepickers").Include(content +
                      "assets/pages/scripts/components-date-time-pickers.min.js"));
            ////Charts highcharts
            //bundles.Add(new ScriptBundle("~/bundles/highchart").Include(content +
            //          "assets/global/plugins/highcharts/js/highcharts.js", content +
            //          "assets/global/plugins/highcharts/js/highcharts-3d.js", content +
            //          "assets/global/plugins/highcharts/js/highcharts-more.js", content +
            //          "assets/pages/scripts/charts-highcharts.js"));
            ////Charts amcharts
            //bundles.Add(new ScriptBundle("~/bundles/amcharts").Include(content +
            //          "assets/global/plugins/amcharts/amcharts/amcharts.js", content +
            //          "assets/global/plugins/amcharts/amcharts/serial.js", content +
            //          "assets/global/plugins/amcharts/amcharts/pie.js", content +
            //          "assets/global/plugins/amcharts/amcharts/radar.js", content +
            //          "assets/global/plugins/amcharts/amcharts/themes/light.js", content +
            //          "assets/global/plugins/amcharts/amcharts/themes/patterns.js", content +
            //          "assets/global/plugins/amcharts/amcharts/themes/chalk.js", content +
            //          "assets/global/plugins/amcharts/ammap/ammap.js", content +
            //          "assets/global/plugins/amcharts/amstockcharts/amstock.js", content +
            //          "assets/pages/scripts/charts-amcharts.js"));
            //Datatables
            bundles.Add(new ScriptBundle("~/bundles/datatables").Include(content +
                      "assets/global/scripts/datatable.js", content +
                      "assets/global/plugins/datatables/datatables.min.js", content +
                      "assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.js", content +
                      "assets/pages/scripts/table-datatables-rowreorder.min.js"));
            //Unobtrusive Ajax JS
            bundles.Add(new ScriptBundle("~/bundles/jqueryunobtrusiveajax").Include(content +
                      "assets/global/plugins/jquery-validation/js/jquery.unobtrusive-ajax.min.js"));
            //Jquery Validate
            bundles.Add(new ScriptBundle("~/bundles/jqueryvalidate").Include(content +
                      "assets/global/plugins/jquery-validation/js/jquery.validate.min.js", content +
                      "assets/global/plugins/jquery-validation/js/jquery.validate.unobtrusive.min.js"));
            //Additional Methods
            bundles.Add(new ScriptBundle("~/bundles/additionalmethods").Include(content +
                      "assets/global/plugins/jquery-validation/js/additional-methods.min.js"));
            //Select 2 Full
            bundles.Add(new ScriptBundle("~/bundles/select2full").Include(content +
                      "assets/global/plugins/select2/js/select2.full.min.js"));
            //Components Select2
            bundles.Add(new ScriptBundle("~/bundles/componentsselect2").Include(content +
                      "assets/pages/scripts/components-select2.min.js"));
            //Jquery Backstretch
            bundles.Add(new ScriptBundle("~/bundles/jquerybackstretch").Include(content +
                      "assets/global/plugins/backstretch/jquery.backstretch.min.js"));
            //Login5
            bundles.Add(new ScriptBundle("~/bundles/login5").Include(content +
                      "assets/pages/scripts/login-5.min.js"));
            //TwbsPagination JS
            bundles.Add(new ScriptBundle("~/bundles/twbsPagination").Include(content +
                      "js/jquery.twbsPagination.min.js"));
            //Toastr JS
            bundles.Add(new ScriptBundle("~/bundles/toastr").Include(content +
                      "assets/global/plugins/bootstrap-toastr/toastr.min.js", content +
                      "assets/pages/scripts/ui-toastr.min.js"));
            //Bootbox JS
            bundles.Add(new ScriptBundle("~/bundles/bootbox").Include(content +
                      "assets/global/plugins/bootbox/bootbox.min.js"));
            //FileUpload
            bundles.Add(new ScriptBundle("~/bundles/fileupload").Include(content +
                      "assets/global/plugins/jquery-file-upload/js/jquery.fileupload.js", content +
                      "assets/global/plugins/jquery-file-upload/js/vendor/jquery.ui.widget.js"));
            //PDFObject
            bundles.Add(new ScriptBundle("~/bundles/pdfobject").Include(content +
                      "js/pdfobject.js"));
            //Autocomplete
            bundles.Add(new ScriptBundle("~/bundles/autocomplete").Include(content +
                      "assets/global/plugins/jquery-file-upload/js/vendor/jquery.ui.widget.js", content +
                      "assets/global/plugins/autocomplete/js/jquery-ui-autocomplete.js"));
            //Print
            bundles.Add(new ScriptBundle("~/bundles/print").Include(content + "js/print.min.js"));
            //Accounting
            bundles.Add(new ScriptBundle("~/bundles/accounting").Include(content + "js/accounting.min.js"));
            //Bootstrap Wysihtml5 + Bootstrap markdown
            bundles.Add(new ScriptBundle("~/bundles/wysihtml5vsmarkdown").Include(content +
                      "assets/global/plugins/bootstrap-wysihtml5/wysihtml5-0.3.0.js", content +
                      "assets/global/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.js", content +
                      "assets/global/plugins/bootstrap-markdown/lib/markdown.js", content +
                      "assets/global/plugins/bootstrap-markdown/js/bootstrap-markdown.js", content +
                      "assets/global/plugins/bootstrap-summernote/summernote.min.js"));
            //Components Editor
            bundles.Add(new ScriptBundle("~/bundles/componentseditor").Include(content +
                "assets/pages/scripts/components-editors.min.js"));
            //Tab Drop
            bundles.Add(new ScriptBundle("~/bundles/bootstraptabdrop").Include(content +
                "assets/global/plugins/bootstrap-tabdrop/js/bootstrap-tabdrop.js"));
            //Inbox
            bundles.Add(new ScriptBundle("~/bundles/inbox").Include(content +
                "assets/apps/scripts/inbox.min.js"));
            //Json to Table
            bundles.Add(new ScriptBundle("~/bundles/jsontotable").Include(content +
                "js/json-to-table.js"));
            //Select Bootstrap
            bundles.Add(new ScriptBundle("~/bundles/bootstrapselect").Include(content +
                "js/bootstrap-select.js"));
            //Alertify
            bundles.Add(new ScriptBundle("~/bundles/alertify").Include(content +
                "js/alertify.min.js"
                ));
            //Bootstrap Fileinput
            bundles.Add(new ScriptBundle("~/bundles/fileinput").Include(
                content + "assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js",
                content + "assets/global/plugins/jquery.sparkline.min.js"));
            //Bootstrap Wizard
            bundles.Add(new ScriptBundle("~/bundles/bootstrapwizard").Include(
                content + "assets/global/plugins/bootstrap-wizard/jquery.bootstrap.wizard.min.js",
                content + "assets/pages/scripts/form-wizard.min.js"));
            //Chart Component
            bundles.Add(new ScriptBundle("~/bundles/chartcomponent").Include(
                content + "assets/global/plugins/moment.min.js",
                content + "assets/global/plugins/morris/morris.min.js",
                content + "assets/global/plugins/morris/raphael-min.js",
                content + "assets/global/plugins/counterup/jquery.waypoints.min.js",
                content + "assets/global/plugins/amcharts/amcharts/core.js",
                content + "assets/global/plugins/amcharts/amcharts/charts.js",
                content + "assets/global/plugins/amcharts/amcharts/animated.js",
                content + "assets/global/plugins/fullcalendar/fullcalendar.min.js",
                content + "assets/global/plugins/horizontal-timeline/horizontal-timeline.js",
                content + "assets/global/plugins/flot/jquery.flot.min.js",
                content + "assets/global/plugins/flot/jquery.flot.resize.min.js",
                content + "assets/global/plugins/flot/jquery.flot.categories.min.js",
                content + "assets/global/plugins/jquery-easypiechart/jquery.easypiechart.min.js",
                content + "assets/global/plugins/jquery.sparkline.min.js"));
            //Turn JS
            bundles.Add(new ScriptBundle("~/bundles/turn").Include(
                content + "assets/global/plugins/turnjs4/extras/jquery.min.1.7.js",
                content + "assets/global/plugins/turnjs4/extras/jquery-ui-1.8.20.custom.min.js",
                content + "assets/global/plugins/turnjs4/extras/modernizr.2.5.3.min.js",
                content + "assets/global/plugins/turnjs4/lib/hash.js",
                content + "assets/global/plugins/turnjs4/lib/turn.min.js",
                content + "assets/global/plugins/turnjs4/lib/turn.html4.min.js",
                content + "assets/global/plugins/turnjs4/lib/zoom.min.js",
                content + "assets/global/plugins/turnjs4/samples/magazine/js/magazine.js"));

            #region Core JS

            //Core Services JS Custom
            bundles.Add(new ScriptBundle("~/bundles/core.services").Include(content +
                      "js/core.services.js"));
            //Core Format Services JS Custom
            bundles.Add(new ScriptBundle("~/bundles/core.format.services").Include(content +
                      "js/core.format.services.js"));

            #endregion

            #endregion

            #region Content

            //Google Font
            bundles.Add(new StyleBundle("~/Content/googlefont").Include(content +
                      "css/googlefont.css"));
            //Font Awesome
            bundles.Add(new StyleBundle("~/Content/fontawesome").Include(content +
                      "assets/global/plugins/font-awesome/css/font-awesome.min.css"));
            //Simple Line Icons
            bundles.Add(new StyleBundle("~/Content/simplelineicons").Include(content +
                      "assets/global/plugins/simple-line-icons/simple-line-icons.min.css"));
            //Bootstrap
            bundles.Add(new StyleBundle("~/Content/bootstrap").Include(content +
                      "assets/global/plugins/bootstrap/css/bootstrap.min.css"));
            //Bootstrap Switch
            bundles.Add(new StyleBundle("~/Content/bootstrapswitch").Include(content +
                      "assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css"));
            //Components
            bundles.Add(new StyleBundle("~/Content/components").Include(content +
                      "assets/global/css/components.css"));
            //Inbox
            bundles.Add(new StyleBundle("~/Content/plugins").Include(content +
                      "assets/global/css/plugins.css"));
            //Plugins
            bundles.Add(new StyleBundle("~/Content/inbox").Include(content +
                      "assets/apps/css/inbox.css"));
            //Layout
            bundles.Add(new StyleBundle("~/Content/layout").Include(content +
                      "assets/layouts/layout/css/layout.css"));
            //Darkblue
            bundles.Add(new StyleBundle("~/Content/darkblue").Include(content +
                      "assets/layouts/layout/css/themes/blue.css"));
            //Custom
            bundles.Add(new StyleBundle("~/Content/custom").Include(content +
                      "assets/layouts/layout/css/custom.css"));
            //Skins all
            bundles.Add(new StyleBundle("~/Content/skinsall").Include(content +
                      "assets/global/plugins/icheck/skins/all.css"));
            //Style
            bundles.Add(new StyleBundle("~/Content/style").Include(content +
                      "assets/global/plugins/jstree/dist/themes/default/style.min.css"));
            //Bootstrap Datepicker3
            bundles.Add(new StyleBundle("~/Content/bootstrapdatepicker3").Include(content +
                      "assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css"));
            //Datatables
            bundles.Add(new StyleBundle("~/Content/datatables").Include(content +
                      "assets/global/plugins/datatables/datatables.min.css", content +
                      "assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css"));
            //Select2
            bundles.Add(new StyleBundle("~/Content/select2").Include(content +
                      "assets/global/plugins/select2/css/select2.min.css"));
            //Select2 Bootstrap
            bundles.Add(new StyleBundle("~/Content/select2bootstrap").Include(content +
                     "assets/global/plugins/select2/css/select2-bootstrap.min.css"));
            //Login-5
            bundles.Add(new StyleBundle("~/Content/login5").Include(content +
                     "assets/pages/css/login-5.css"));
            //Error
            bundles.Add(new StyleBundle("~/Content/error").Include(content +
                     "assets/pages/css/error.min.css"));
            //Toastr
            bundles.Add(new StyleBundle("~/Content/toastr").Include(content +
                     "assets/global/plugins/bootstrap-toastr/toastr.min.css"));
            //Autocomplete
            bundles.Add(new StyleBundle("~/Content/autocomplete").Include(content +
                     "assets/global/plugins/jquery-ui/jquery-ui.css", content +
                     "assets/global/plugins/autocomplete/css/autocomplete.css"));
            //Print
            bundles.Add(new StyleBundle("~/Content/print").Include(content + "css/print.min.css"));
            //Components Editor
            bundles.Add(new StyleBundle("~/Content/componentseditor").Include(content
                + "assets/global/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.css", content
                + "assets/global/plugins/bootstrap-markdown/css/bootstrap-markdown.min.css", content
                + "assets/global/plugins/bootstrap-summernote/summernote.css"));
            // Inbox
            bundles.Add(new StyleBundle("~/Content/inbox").Include(content
                   + "assets/global/plugins/fancybox/source/jquery.fancybox.css", content
                   + "assets/apps/css/inbox.min.css", content
                   + "assets/global/plugins/bootstrap-wysihtml5/bootstrap-wysihtml9.css"));
            //Bootstrap Select
            bundles.Add(new StyleBundle("~/Content/bootstrapselect").Include(content + "css/bootstrap-select.css"));
            //FAQ
            bundles.Add(new StyleBundle("~/Content/faq").Include(content +
                     "assets/pages/css/faq.min.css"));
            //Alertify
            bundles.Add(new StyleBundle("~/Content/alertify").Include(content + "css/alertify.min.css", content + "css/default.min.css"));
            //Easy Autocomplete
            bundles.Add(new StyleBundle("~/Content/easy-autocomplete").Include(content + "css/easy-autocomplete.min.css", content + "css/easy-autocomplete.themes.min.css"));
            //Bootstrap Fileinput
            bundles.Add(new StyleBundle("~/Content/fileinput").Include(
                content + "assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css"));

            BundleTable.EnableOptimizations = false;
            #endregion
        }
    }
}
