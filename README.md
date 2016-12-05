<h1>Ionic SideMenu for android</h1>

Good news for your next android apps developed using ionic V1

Finally the native side menu for android platform is available in Ionic V1 so make your app really cool and professional.

No need to immigrate toward V2, it will be better to stay in V1 until V2 become fully stable ;)

<h1>Requirements</h1>
<ul>
    <li>Apache Cordova 3.5+</li>
    <li>AngularJS 1</li>
    <li>Ionic  1.3 +</li>
    
</ul>


  We worked so hard to simulate the standard Android menu using ionic V1, within we focused in several objects:

1.    so easy to include in your project even if you have your Ionic app ready

2.    easy to customize using css

3.    clean and well-commented code

4.    simulate exactly the native android menu

5.    giving the maximum of developing liberty to change and add any code and particular specifications

6.    best performance :avoiding any problem related to heaviness animations ,screen dimensions and directions

7.    testing from browsers tell virtual devices until real devices (Samsung s6 , Samsung s6 H, Samsung J2 and more )

 
<h1>INTEGRATION</h1>
<h5>start from this project</h5>
Download this example project from GitHub and run the following commands:
<pre>
  <code>
  $ ionic platform add android
  $ ionic build android
            OR 
  $ ionic platform add ios        
  $ ionic build  ios   
  </code>
</pre>

<h5>start from new project</h5>
Firstly,inculde the css/js files : (NativeSideMenu.css AND NativeSideMenu.js)
Then, in your index.html file add the followings:


    <link href="css/NativeSideMenu.css" rel="stylesheet">
    <script src="js/NativeSideMenu.js"></script>
 
Next, inject the directive in your app :
  in app.js add 'ionic.contrib.NativeDrawer':
  
  <pre>
  <code>
  angular.module('starter', ['ionic', 'starter.controllers','ionic.contrib.NativeDrawer'])
  </code>
</pre>
 
As a simple sidemenu , make an abstract state in the config function
 (in app.js )
 <pre>
  <code>
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
     .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/androidmenu.html',
      controller: 'AppCtrl'
    })
  </code>
</pre>
<h3> NOTICE</h3>
if you want to use the defult menuside and our menuside at the same time : 
  in case of ios platform: use the default ionic menuside.
  in case of android platform: use this new menuside.

YOU MUST CHANGE A BIT THE PREVIOUS CODE TO:
 <pre>
  <code>
.config(function ($stateProvider, $urlRouterProvider) {
    var menu = "menu";
    if (ionic.Platform.isAndroid()) {
        menu = "androidmenu";
    }
    $stateProvider
     .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/' + menu + '.html',
            controller: 'AppCtrl'
        })
  </code>
</pre>
Dont forget to create this 2 files : 
www/template/androidmenu.html (that i will explain later how to create)
AND www/template/menu.html (the default in ionic_sidemenu project)

<h5>androidmenu.html</h5>

            <ion-side-menus>
                 <ion-side-menu-content>
                        <!-- YOUR ion-nav-bar  -->
                      <ion-pane drawer-menu-content>
                        <!-- YOUR APP CONTENT  -->
                      </ion-pane>
                 </ion-side-menu-content>

                 <drawer side="left">
                    <ion-content  >
				               <!-- YOUR MENU SIDE CONTENT  -->
                    </ion-content>
                 </drawer>
            </ion-side-menus>
            

this is the structure of the file , so we have 3 parts :
1) (YOUR ion-nav-bar): the header of the app containing the button of openning menu 
      to identify the control-button ,just add 'menu-and-drawer-toggle' For exemple:
    <button class="button button-icon button-clear ion-android-menu"    menu-and-drawer-toggle>
    </button>
 Then the ful content of this part will be :
 
                      <ion-nav-bar class="bar-dark">
                        <ion-nav-back-button >
                        </ion-nav-back-button>
                        <ion-nav-buttons side="left">
                          <button class="button button-icon button-clear ion-android-menu"    menu-and-drawer-toggle>
                          </button>
                        </ion-nav-buttons>
                      </ion-nav-bar>
                      
 SO REPLACE THIS CODE INSTEAD OF : <!-- YOUR ion-nav-bar  -->
 
2)(YOUR YOUR APP CONTENT): main content of the app ,just add 'ion-nav-view' or any other content
  Then the ful content of this part will be :
 
     <ion-nav-view name="menuContent"></ion-nav-view>
      
                      
 SO REPLACE THIS CODE INSTEAD OF : <!-- YOUR YOUR APP CONTENT  -->
 
3)(YOUR MENU SIDE CONTENT): the content of the menu .
  to close menu after clicking on button  ,just add 'menu-and-drawer-toggle' For exemple:
```html
<a class="item item-icon-left" href="#" menu-and-drawer-toggle>
	<i class="icon ion-ios-home"></i> HOME
</a>
```    
 Then the ful content of this part will be :
```html
<div class="list">

	<a class="item item-icon-left" href="#" menu-and-drawer-toggle>
		<i class="icon ion-ios-home"></i> HOME
	</a>

	<a class="item item-icon-left" href="#" menu-and-drawer-toggle>
		<i class="icon ion-android-clipboard"></i> ABOUT US
	</a>

	<a class="item item-icon-left" href="#" menu-and-drawer-toggle>
		<i class="icon ion-android-call"></i> CONTACT US
	</a>
</div>
```
                      
SO REPLACE THIS CODE INSTEAD OF :<!-- YOUR MENU SIDE CONTENT  -->

 
 <h3>An Exemple of androidmenu.html</h3>
  <ion-side-menus>
	<ion-side-menu-content>
		<ion-nav-bar class="bar-dark">
			<ion-nav-back-button>
			</ion-nav-back-button>
			<ion-nav-buttons side="left">
				<button class="button button-icon button-clear ion-android-menu" menu-and-drawer-toggle>
                          </button>
			</ion-nav-buttons>
		</ion-nav-bar>
		<ion-pane drawer-menu-content>
			<ion-nav-view name="menuContent"></ion-nav-view>
		</ion-pane>
	</ion-side-menu-content>

	<drawer side="left">
		<ion-content style="background-color: black;">
			<div style="height: 180px;width: 100%;background-image:url('img/2.jpg');padding-top: 40px;padding-left: 35px;background-size: cover;">

				<a href="" style="    text-decoration: none;border:none;">

					<img class="circle" src="img/sof.jpg" style="border-radius: 50px;height:65px;">
					<br>
					<p class="white-text name" style="line-height: 12px;font-size: 20px;color:white;">Karray Soufien</p>
					<p class="white-text email" style="line-height: 10px;font-size: 14px;color:white;">karraysoufien@gmail.com</p>
				</a>
			</div>
			<div class="list">

				<a class="item item-icon-left" href="#" style="background: transparent ;color: white;border: none;" menu-and-drawer-toggle>
					<i class="icon ion-ios-home"></i> HOME
				</a>

				<a class="item item-icon-left" href="#" style="background: transparent ;color: white;border: none;" menu-and-drawer-toggle>
					<i class="icon ion-android-clipboard"></i> ABOUT US
				</a>

				<a class="item item-icon-left" href="#" style="background: transparent ;color: white;border: none;" menu-and-drawer-toggle>
					<i class="icon ion-android-call"></i> CONTACT US

				</a>

				<a class="item item-icon-left" href="#" style="background: transparent ;color: white;border: none;" menu-and-drawer-toggle>
					<i class="icon ion-social-github"></i> FOLLOW US
				</a>
				<a class="item item-icon-left" href="#" style="background: transparent ;color: white;border: none;" menu-and-drawer-toggle>
					<i class="icon ion-ios-home"></i> HOME
				</a>

				<a class="item item-icon-left" href="#" style="background: transparent ;color: white;border: none;" menu-and-drawer-toggle>
					<i class="icon ion-android-clipboard"></i> ABOUT US
				</a>

				<a class="item item-icon-left" href="#" style="background: transparent ;color: white;border: none;" menu-and-drawer-toggle>
					<i class="icon ion-android-call"></i> CONTACT US

				</a>

				<a class="item item-icon-left" href="#" style="background: transparent ;color: white;border: none;" menu-and-drawer-toggle>
					<i class="icon ion-social-github"></i> FOLLOW US
				</a>
				<a class="item item-icon-left" href="#" style="background: transparent ;color: white;border: none;" menu-and-drawer-toggle>
					<i class="icon ion-ios-home"></i> HOME
				</a>

				<a class="item item-icon-left" href="#" style="background: transparent ;color: white;border: none;" menu-and-drawer-toggle>
					<i class="icon ion-android-clipboard"></i> ABOUT US
				</a>

				<a class="item item-icon-left" href="#" style="background: transparent ;color: white;border: none;" menu-and-drawer-toggle>
					<i class="icon ion-android-call"></i> CONTACT US

				</a>

				<a class="item item-icon-left" href="#" style="background: transparent ;color: white;border: none;" menu-and-drawer-toggle>
					<i class="icon ion-social-github"></i> FOLLOW US
				</a>
				<a class="item item-icon-left" href="#" style="background: transparent ;color: white;border: none;" menu-and-drawer-toggle>
					<i class="icon ion-ios-home"></i> HOME
				</a>

				<a class="item item-icon-left" href="#" style="background: transparent ;color: white;border: none;" menu-and-drawer-toggle>
					<i class="icon ion-android-clipboard"></i> ABOUT US
				</a>

				<a class="item item-icon-left" href="#" style="background: transparent ;color: white;border: none;" menu-and-drawer-toggle>
					<i class="icon ion-android-call"></i> CONTACT US

				</a>

				<a class="item item-icon-left" href="#" style="background: transparent ;color: white;border: none;" menu-and-drawer-toggle>
					<i class="icon ion-social-github"></i> FOLLOW US
				</a>

			</div>
		</ion-content>
	</drawer>
</ion-side-menus>
    
<h1>customize CSS</h1>
the most important thing is the backdrop:

<pre>
  <code>
.drawer-open .drawer-content .pane, .drawer-open .drawer-content .scroll-content 
  {
  pointer-events: none;
  opacity:0.5;
  background-color:rgba(0,0,0,0.5);
  }
</code>
</pre>
choose your color :) 

<h1>Have a question or found a bug (compliments work too)?</h1>
email: karraysoufien@gmail.com
       karray.soufien.ipsas@gmail.com




<img width=605 height=324 id="Image 26"
src="http://paidmailmanager.de/AppFactory/ionic/AndroisSideMenu/images/bg.jpg">
