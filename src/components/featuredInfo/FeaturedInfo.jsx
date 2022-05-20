import React from 'react'
import "./featuredInfo.css"
import {ArrowDownwardOutlined, ArrowUpwardOutlined} from "@material-ui/icons";
export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,435</span>
                <span className="featuredMoneyRate">
                    -10.56 <ArrowDownwardOutlined className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSubtitle">
                       Compared to last month
                       </span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,59</span>
                <span className="featuredMoneyRate">
                    -1.56 <ArrowDownwardOutlined className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSubtitle">
                       Compared to last month
                       </span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$7,859</span>
                <span className="featuredMoneyRate">
                    +3.56 <ArrowUpwardOutlined className="featuredIcon"/>
                </span>
            </div>
            <span className="featuredSubtitle">
                       Compared to last month
                       </span>
        </div>


    </div>
  )
}
