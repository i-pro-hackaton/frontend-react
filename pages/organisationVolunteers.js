import MainNavbar from '../components/navbar'
import style from '../styles/organizationPage.module.css'
import OrganizationHat from '../components/organizationHat'
import Footer from '../components/footer'
import VolunteerCard from '../components/volunteerCard';
import SideScreen from '../components/sideScreen';
import volunteercard from '../components/volunteerCard';

export default function organizationPage() {
    return (
        <div className={style.flexAlignColumn} style={{ width: '100%', backgroundColor: "#EFF1FB", }}>
            <MainNavbar></MainNavbar>
            <div className={style.pageContent}>
                <div className={style.spacerFive}></div>
                <OrganizationHat hatImg={'/static/hackathonHat.png'} organizationTitle={'Хакатон-клуб'} avatarImg={'/static/avatarImg.png'} ></OrganizationHat>
                <div className={style.sidebar}>
                    <SideScreen n='2'></SideScreen>
                    <div>
                        <h1 className={style.big}>Мои волонтёры</h1>
                        <div className={style.flex}>
                            <div className={style.searchBar}></div>
                            <div className={style.add}></div>
                        </div>
                        <div className={style.organizationRows}>
                            <div className={style.navigationMenu}>
                                <VolunteerCard />
                                <VolunteerCard />
                            </div>
                            <div className={style.myEventsColumn}>
                                <VolunteerCard />
                                <VolunteerCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={style.spacerFiveFive}></div> */}

            <Footer></Footer>
        </div>
    )
}