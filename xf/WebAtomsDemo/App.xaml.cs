using System.Threading.Tasks;
using WebAtoms;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

[assembly: ExportFont("Font Awesome 5 Brands-Regular-400.otf", Alias = "FontAwesomeBrands")]
[assembly: ExportFont("Font Awesome 5 Free-Regular-400.otf", Alias = "FontAwesomeRegular")]
[assembly: ExportFont("Font Awesome 5 Free-Solid-900.otf", Alias = "FontAwesomeSolid")]
[assembly: XamlCompilation(XamlCompilationOptions.Compile)]
namespace WebAtomsDemo
{
	public partial class App : Application
	{
		private ConnectionSettings settings;

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

			AtomDevice.Instance.BeginInvokeOnMainThread(async () => {
				this.settings = await ConnectionSettings.GetSettingsAsync();
				await InitAsync();
			});
		}

		private async Task InitAsync()
		{
			var bridge = new AppBridge();
			await bridge.InitAsync(
				settings.Root, 
				settings.Package, 
				settings.PackedScript, 
				// mock views 
				settings.DesignMode,
				// enable debugging in Chrome for Android
				// and auto refresh changes
				settings.Debug);
			var view = await bridge.CreateView(settings.View);

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
