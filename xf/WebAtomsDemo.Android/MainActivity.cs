using System;

using Android.App;
using Android.Content.PM;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;

[assembly: Xamarin.Forms.Dependency(typeof(Xamarin.Android.V8.JSContextFactory))]
[assembly: Xamarin.Forms.Dependency(typeof(WebAtoms.AppOkHttpClient))]

namespace WebAtomsDemo.Droid
{
    [Activity(Label = "WebAtomsDemo", Icon = "@mipmap/icon", Theme = "@style/WebAtomsAppTheme", MainLauncher = true, ConfigurationChanges = ConfigChanges.ScreenSize | ConfigChanges.Orientation)]
    public class MainActivity : global::Xamarin.Forms.Platform.Android.FormsAppCompatActivity
    {
        public override void OnBackPressed()
        {
            if (!Rg.Plugins.Popup.Popup.SendBackPressed(base.OnBackPressed))
            {
                base.OnBackPressed();
            }
        }

        protected override void OnCreate(Bundle bundle)
        {

            base.OnCreate(bundle);


            Rg.Plugins.Popup.Popup.Init(this);

            global::Xamarin.Forms.Forms.Init(this, bundle);
            // TabLayoutResource = Resource.Layout.Tabbar;
            ToolbarResource = Resource.Layout.Toolbar;
            LoadApplication(new App());
        }

        public override void OnRequestPermissionsResult(int requestCode, string[] permissions, [GeneratedEnum] Android.Content.PM.Permission[] grantResults)
        {
            Xamarin.Essentials.Platform.OnRequestPermissionsResult(requestCode, permissions, grantResults);

            base.OnRequestPermissionsResult(requestCode, permissions, grantResults);
        }

    }
}

