import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import "./home.css"
import {userData} from '../../dummyData'
import WidgetSm from '../../components/widgetSmall/WidgetSm'
import WidgetLa from '../../components/widgetLarge/WidgetLa'

export default function home() {
  return (
    <div className="home">
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
       <WidgetSm/>
       <WidgetLa/>
        </div>
        </div>
  )
}

