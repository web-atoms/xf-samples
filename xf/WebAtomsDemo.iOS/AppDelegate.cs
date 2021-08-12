﻿using System;
using System.Collections.Generic;
using System.Linq;

using Foundation;
using UIKit;
using WebAtoms;
using WebAtoms.XF.Core;

[assembly: Xamarin.Forms.Dependency(typeof(WJSContextFactory))]
[assembly: Xamarin.Forms.Dependency(typeof(AtomWebClient))]

namespace WebAtomsDemo.iOS
{
    // The UIApplicationDelegate for the application. This class is responsible for launching the 
    // User Interface of the application, as well as listening (and optionally responding) to 
    // application events from iOS.
    [Register("AppDelegate")]
    public partial class AppDelegate : global::Xamarin.Forms.Platform.iOS.FormsApplicationDelegate
    {
        //
        // This method is invoked when the application has loaded and is ready to run. In this 
        // method you should instantiate the window, load the UI into it and then make the window
        // visible.
        //
        // You have 17 seconds to return from this method, or iOS will terminate your application.
        //
        public override bool FinishedLaunching(UIApplication app, NSDictionary options)
        {

            Rg.Plugins.Popup.Popup.Init();

            global::Xamarin.Forms.Forms.Init();
            LoadApplication(new App());

            //foreach(var fontName in UIFont.FamilyNames)
            //{
            //    foreach(var fn in UIFont.FontNamesForFamilyName(fontName).OrderBy(x => x))
            //    {
            //        Console.WriteLine(fn);
            //    }
            //}

            return base.FinishedLaunching(app, options);
        }
    }
}
