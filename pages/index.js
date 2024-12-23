import CustomHead from '../components/CustomHead'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './index.module.scss';

const Home = (props) => {
  const thisPage='home';
  const menu = props.menu;
  return (
    <>
      <CustomHead 
        title='TVBS新聞網'
        description='TVBS新聞網揭露即時且完整的時事新聞、Focus全球新聞及線上直播，並提供打包新聞、T談談、民調等新聞，展現兼具深度及廣度的新聞視野│TVBS 最值得信賴的媒體'
        keywords='新聞,氣象,食尚,星聞,焦點,新奇,健康,生活,科技,全球,社會,政經,運動,影劇,議題,直播,談談,Focus,NEWS,TVBS NEWS'
        url='https://news.tvbs.com.tw/'
      />        
      <Header menu={menu} />
      <main className={styles.homePage}>
        <div className='frameBox'>
          <article>
              主欄標示分支11111
          </article>
          <aside>
              右欄
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Home;

export async function getStaticProps() {
  const menuUrl = new URL('/api/menu', process.env.APP_URL)
  const menuRes = await fetch(menuUrl)
  const menu = await menuRes.json()

  return {
    props: {
      menu,
    },
    revalidate: 300,
  }
}