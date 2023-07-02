import {
  IonContent,
  IonButton,
  IonIcon,
  IonButtons,
  IonMenuButton,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenuToggle,
  IonItem,
  IonMenu,
  IonSplitPane,
  IonToggle,
  IonList,
  IonLabel,
  IonSearchbar,
  IonCardContent,
  IonCard,
  IonImg,
  IonRouterLink,
  IonFooter,
  IonLoading,
  RefresherEventDetail,
  IonSkeletonText,
  IonAvatar,
  IonChip,
  IonRefresher,
  IonRefresherContent,
} from "@ionic/react";

import "./Home.css";
import {
  checkboxOutline,
  homeOutline,
  logOut,
  logOutOutline,
  logOutSharp,
  newspaperOutline,
  personCircleOutline,
  settingsOutline,
  syncOutline,
  logoGithub,
  moon,
  sunnyOutline,
  moonOutline,
} from "ionicons/icons";
import {
  useIonRouter,
  useIonLoading,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { useEffect, useState } from "react";
const api = "https://api.github.com/users";

const Home: React.FC = () => {
  const [isLoading, isLoaded] = useIonLoading();
  const [light, setLight] = useState(true);
  const [users, setUsers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);


  //Fetch Users
  const fetchUsers = async () => {
    const res = await fetch("https://api.github.com/users");
    const users = await res.json();
    setUsers(users);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //Log out page

  const router = useIonRouter();
  const logOutPage = async () => {
    await isLoading("Logging out.");
    setTimeout(() => {
      isLoaded();
      router.push("/", "root");
    }, 3000);
  };

  //Theme Toggle

  const switchColors = () => {
    document.body.classList.toggle("dark");
    setLight(!light);
  };

  //Page Refresh

  const doRefresh = async (e: any) => {
    const data = await fetchUsers();
    setUsers(users);
    e.detail.complete();
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
  if (loading) {
    return (
      <>
        {[...Array(10)].map((_, index) => (
          <IonCard key={index}>
            <IonCardContent className="ion-no-padding">
              <IonItem lines="none">
                <IonAvatar slot="start">
                  <IonSkeletonText></IonSkeletonText>
                </IonAvatar>
                <IonLabel>
                  <IonSkeletonText animated style={{ width: "150px" }} />
                  <p>
                    <IonSkeletonText />
                  </p>
                </IonLabel>
                <IonChip slot="end" color={"primary"}></IonChip>
              </IonItem>
            </IonCardContent>
          </IonCard>
        ))}
      </>
    );
  }

  return (
    <>
      <IonSplitPane when="xl" contentId="main" className="stuff">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar color={"dark"}>
              <IonTitle>Menu Content</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
            <IonRefresherContent></IonRefresherContent>
          </IonRefresher>
          <IonContent className="ion-padding">
            {paths.map((path, index) => {
              return (
                <>
                  <IonMenuToggle autoHide={false}>
                    <IonItem
                      detail={true}
                      routerLink={path.url}
                      routerDirection="none"
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
              <IonItem detail={true} routerDirection="none" routerLink="/home">
                {<IonIcon slot="start" icon={logOutOutline}></IonIcon>}
                Logout
              </IonItem>
            </IonMenuToggle>
          </IonContent>
        </IonMenu>
        <IonPage id="main">
          <IonHeader>
            <IonToolbar color={"dark"}>
              <IonButtons slot="start">
                <IonMenuButton color={"light"}></IonMenuButton>
              </IonButtons>
              <div className="header">
                <IonIcon
                  className="git-logo-header"
                  icon={logoGithub}
                  color={"light"}
                ></IonIcon>
                <IonTitle>GitHub Users</IonTitle>
              </div>
            </IonToolbar>
            <IonToolbar color={"dark"} className="dog">
              <IonSearchbar
                value={searchQuery}
                onIonInput={(e: any) => setSearchQuery(e.target.value)}
              />
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <div className="section">
              {users
                .filter((user) =>
                  user.login.toLowerCase().includes(searchQuery)
                )
                .map((user) => {
                  const { id, login, avatar_url } = user;
                  const profilePage = async () => {
                    await isLoading("Loading Profile page.");
                    setTimeout(() => {
                      isLoaded();
                      router.push(`/home/users/${login}`, "forward");
                      window.location.reload();
                    }, 1000);
                  };
                  return (
                    <>
                      <section className="github-users">
                        <article className="user">
                          <IonCard className="card">
                            <IonCardContent
                              className={`users-data ${
                                light
                                  ? "ion-background-color-light"
                                  : "ion-background-color-dark"
                              }`}
                            >
                              <div className="user-data">
                                <img
                                  className="avatar-image"
                                  src={avatar_url}
                                  alt={login}
                                />
                                <h2>{login}</h2>
                              </div>
                              <div className="users-btn">
                                <IonButton
                                  className="profile-btn"
                                  slot="end"
                                  color={`dark`}
                                  onClick={profilePage}
                                >
                                  View Profile
                                </IonButton>
                              </div>
                            </IonCardContent>
                          </IonCard>
                        </article>
                      </section>
                    </>
                  );
                })}
            </div>
          </IonContent>
        </IonPage>
      </IonSplitPane>
    </>
  );
};

export default Home;
