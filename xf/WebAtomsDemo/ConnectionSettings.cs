using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace WebAtomsDemo
{
    public class ConnectionSettings
    {

        public string Root { get; set; } = "https://cdn.jsdelivr.net/npm/@web-atoms/xf-samples@2.0.24/";
        public string EndPointUrl { get; set; } = "https://test.yourapi.com";

        public string Package { get; set; } = "@web-atoms/xf-samples";

        public string View { get; set; } = "@web-atoms/xf-samples/dist/Index";

        public string PackedScript { get; set; } = "dist/Index.pack.js";
        public bool FetchNewVersion { get; set; } = false;
        public bool Debug { get; set; } = false;

        public bool DesignMode { get; set; } = true;

        public ConnectionSettings()
        {
            FetchNewVersion = false;
            Debug = false;
            Root = Xamarin.Essentials.Preferences.Get(nameof(Root), Root);
            EndPointUrl = Xamarin.Essentials.Preferences.Get(nameof(EndPointUrl), EndPointUrl);
            View = Xamarin.Essentials.Preferences.Get(nameof(View), View);
            PackedScript = Xamarin.Essentials.Preferences.Get(nameof(PackedScript), PackedScript);
            Package = Xamarin.Essentials.Preferences.Get(nameof(Package), Package);
            FetchNewVersion = Xamarin.Essentials.Preferences.Get(nameof(FetchNewVersion), FetchNewVersion);
            Debug = Xamarin.Essentials.Preferences.Get(nameof(Debug), Debug);
            DesignMode = Xamarin.Essentials.Preferences.Get(nameof(DesignMode), DesignMode);

        }

        public static async Task<ConnectionSettings> GetSettingsAsync()
        {
#if __LOCAL__ || DEBUG
            return await AskAsync();
#else
            return new ConnectionSettings();
#endif
        }

        private static Task<ConnectionSettings> AskAsync()
        {
            var sp = new SettingsPage();
            App.Current.MainPage = sp;
            return sp.Complete.Task;
        }

    }
}
