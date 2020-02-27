using System;
using WebAtoms;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

[assembly: XamlCompilation (XamlCompilationOptions.Compile)]
namespace WebAtomsDemo
{
	public partial class App : Application
	{
		public App ()
		{
			InitializeComponent();

            // MainPage = new MainPage();

            MainPage = new NavigationPage( new ContentPage {
                Title = "Loading..",
                Content = new Label {
                    Text = "Loading..."
                }
            });

			// Enable your flags here!
			Device.SetFlags(new[] {
				"SwipeView_Experimental"
			});

			string packageName = "";
			string root = "";

			 //packageName = "@c8private/apps";
			packageName = "@web-atoms/xf-samples";
			// root = "https://cdn.jsdelivr.net/npm/@web-atoms/xf-samples@1.0.37/";
			root = "http://192.168.0.6:8080/";			
		

			var bridge = new AppBridge();

			bridge.RefreshEvent += (s, e) =>
			{
				AtomDevice.Instance.BeginInvokeOnMainThread(async () =>
				{
					await bridge.CreateView(root, packageName, "@web-atoms/xf-samples/dist/Index", packed: false, debug: true, designMode: true);
				});
			};

			bridge.Refresh();

		}

		protected override void OnStart ()
		{
			// Handle when your app starts
		}

		protected override void OnSleep ()
		{
			// Handle when your app sleeps
		}

		protected override void OnResume ()
		{
			// Handle when your app resumes
		}
	}
}
