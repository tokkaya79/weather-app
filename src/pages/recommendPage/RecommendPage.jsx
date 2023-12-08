
import NavBar from '../../components/navBar/NavBar'
import RecommendComponent from '../../components/recommendComponent/RecommendComponent'

export default function RecommendPage() {
    
  return (
    <>
            <NavBar/>
            <div className="box box-recommend">
                <h2 className="title-weather">Recommendation</h2>
                <RecommendComponent  />
            </div>
        </>
  )
}
