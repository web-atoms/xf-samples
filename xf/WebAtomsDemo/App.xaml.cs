using System;
using System.Threading.Tasks;
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

			// Enable your flags here!
			Device.SetFlags(new[] {
				"Shapes_Experimental",
				"SwipeView_Experimental"
			});
			// MainPage = new MainPage();

			MainPage = new NavigationPage( new ContentPage {
                Title = "Loading..",
                Content = new Label {
                    Text = "Loading..."
                }
            });

			AtomDevice.Instance.BeginInvokeOnMainThread(InitAsync);
		}

		private async Task InitAsync()
		{
			string packageName = "";
			string root = "";

			packageName = "@web-atoms/xf-samples";
			root = "https://cdn.jsdelivr.net/npm/@web-atoms/xf-samples@1.1.31/";
			// enable following for local testing
			// root = "http://192.168.0.6:8080";

			var jsView = "@web-atoms/xf-samples/dist/Index";
			var packedView = "dist/Index.pack.js";


			var bridge = new AppBridge();
			await bridge.InitAsync(
				root, 
				packageName, 
				packedView, 
				// mock views 
				designMode: true,
				// enable debugging in Chrome for Android
				// and auto refresh changes
				debug: false);
			var view = await bridge.CreateView(jsView);

			Current.MainPage = view as Page;

			// Enable Refresh while debugging
			bridge.RefreshEvent += (s, e) =>
			{
				AtomDevice.Instance.BeginInvokeOnMainThread(InitAsync);
			};
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
