import {
  IonContent,
  IonHeader,
  IonMenu,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonItem,
  IonMenuToggle,
  IonIcon,
  IonSplitPane,
  IonButton,
  useIonViewWillEnter,
  IonSearchbar,
  IonTabBar,
  IonTabs,
  IonTabButton,
  IonLabel,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonAvatar,
  IonImg,
  IonList,

  
} from "@ionic/react";
import React, { useEffect, useState } from "react";

import { Redirect, Route } from "react-router";

import {
  arrowForward,
  homeOutline,
  logOutOutline,
  newspaperOutline,
  trashBinOutline,
  playCircle,
  pauseCircle,
  peopleCircleOutline,
  personCircleOutline,
  settingsOutline,
  syncOutline,
  moonOutline,
  sunnyOutline
} from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import Account from "./Account";
import UserList from "./UserList";

import { IonToggle, useIonLoading, useIonRouter } from "@ionic/react";

const Home: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isLoading, isLoaded] = useIonLoading();

  const [light, setLight] = useState(true);

  const data = "https://randomuser.me/api?results=10";

  const getUsers = async () => {
    const res = await fetch(data);
    const newUsers = await res.json();
    setUsers(newUsers.results);
    console.log(newUsers.results);
  };
  useIonViewWillEnter(() => {
    getUsers();
    setLoading(false);
  });

  const router = useIonRouter();
  const logOutPage = async () => {
    await isLoading("Logging out.");
    setTimeout(() => {
      isLoaded();
      router.push("/", "root");
    }, 3000);
  };

  const switchColors = () => {
    document.body.classList.toggle("dark");
    setLight(!light);
  };

  const paths = [
    {
      name: "Home",
      url: "/home",
      icon: homeOutline,
    },
    {
      name: "Repositories",
      url: "/home",
      icon: syncOutline,
    },
    {
      name: "Settings",
      url: "/home",
      icon: settingsOutline,
    },

  ];

    const profilePage = async () => {
    await isLoading("Loading users");
    setTimeout(() => {
      isLoaded();
      window.location.reload();
    }, 1000);
  };
  return (
    <>
      <IonSplitPane when="xl" contentId="main-content" className="stuff">
        <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar color={"dark"}>
              {" "}
              <IonTitle>Menu Content</IonTitle>{" "}
            </IonToolbar>
          </IonHeader>
   
          <IonContent className="ion-padding">
            {paths.map((path, index) => {
              return (
                <>
                  <IonMenuToggle autoHide={false}>
                    <IonItem
                      detail={true}
                      routerLink={path.url}
                      routerDirection="none"
                      className="items"
                      key={index}
                    >
                      {<IonIcon slot="start" icon={path.icon}></IonIcon>}
                      {path.name}
                    </IonItem>
                  </IonMenuToggle>
                </>
              );
            })}
                          <IonList>
                <IonItem>
                  <IonIcon
                    slot="start"
                    icon={light ? moonOutline : sunnyOutline}
                  />
                  <IonLabel>{light ? "Dark Mode" : "Light Mode"}</IonLabel>
                  <IonToggle
                    slot="end"
                    name="darkMode"
                    onIonChange={switchColors}
                    color={light ? "light" : "dark"}
                  />
                </IonItem>
              </IonList>
            <IonMenuToggle autoHide={false} onClick={logOutPage}>
              {" "}
              <IonItem detail={true} routerDirection="none" routerLink="/home">
                {<IonIcon slot="start" icon={logOutOutline}></IonIcon>}
                Logout
              </IonItem>
            </IonMenuToggle>
          </IonContent>
        </IonMenu>
        <IonPage id="main-content">
          <IonHeader></IonHeader>
          <IonContent className="ion-padding">
            <IonTabs>
              <IonRouterOutlet>
                <Route path="/home/user-list" component={UserList} />
                <Route path="/home/account" component={Account} />

                <Route exact path="/home">
                  <Redirect to="/home/user-list" />
                </Route>
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="Users" href="/home/user-list" onClick={profilePage}>
                  <IonIcon icon={peopleCircleOutline} />
                  <IonLabel>Users</IonLabel>
                </IonTabButton>
                <IonTabButton tab="account" href="/home/account" >
                  <IonIcon icon={personCircleOutline} />
                  <IonLabel>Account</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonContent>
        </IonPage>
      </IonSplitPane>
    </>
  );
};

export default Home;

