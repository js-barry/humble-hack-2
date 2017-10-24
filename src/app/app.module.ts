import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {PlacesPage} from '../pages/places/places';
import {NavigationPage} from '../pages/navigation/navigation';
import {PlacesPopoverPage} from '../pages/places-popover/places-popover';

import {HttpClientModule} from '@angular/common/http';
import {ExpediansPage} from "../pages/expedians/expedians";
import {AffinitiesPage} from "../pages/affinities/affinities";
import { UserProvider } from '../providers/user/user';
import { ApiServiceProvider } from '../providers/api-service/api-service';


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        PlacesPage,
        PlacesPopoverPage,
        NavigationPage,
        ExpediansPage,
        AffinitiesPage
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        PlacesPage,
        PlacesPopoverPage,
        NavigationPage,
        ExpediansPage,
        AffinitiesPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    ApiServiceProvider
    ]
})
export class AppModule {
}
