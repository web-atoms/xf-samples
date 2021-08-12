using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace WebAtomsDemo
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class SettingsPage : ContentPage
    {
        public TaskCompletionSource<ConnectionSettings> Complete = new TaskCompletionSource<ConnectionSettings>();
        private ConnectionSettings settings = new ConnectionSettings();
        public SettingsPage()
        {
            this.BindingContext = settings;
            InitializeComponent();
        }

        private void StartButton_Clicked(object sender, EventArgs e)
        {
            // save...
            Xamarin.Essentials.Preferences.Set(nameof(settings.Root), settings.Root);
            Xamarin.Essentials.Preferences.Set(nameof(settings.EndPointUrl), settings.EndPointUrl);
            Xamarin.Essentials.Preferences.Set(nameof(settings.View), settings.View);
            Xamarin.Essentials.Preferences.Set(nameof(settings.Package), settings.Package);
            Xamarin.Essentials.Preferences.Set(nameof(settings.PackedScript), settings.PackedScript);
            Xamarin.Essentials.Preferences.Set(nameof(settings.FetchNewVersion), settings.FetchNewVersion);
            Xamarin.Essentials.Preferences.Set(nameof(settings.Debug), settings.Debug);
            Xamarin.Essentials.Preferences.Set(nameof(settings.DesignMode), settings.DesignMode);
            StartButton.IsVisible = false;
            Activity.IsRunning = true;
            Activity.IsVisible = true;
            Complete.TrySetResult(settings);
        }
    }
}