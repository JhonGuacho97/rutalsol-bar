import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShoppingCart,
    faCartPlus,
    faArrowRight,
    faArrowLeft,
    faDollar,
    faSquareMinus,
    faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { getFormattedMessage } from "../../shared/sharedMethod";
import { todaySalePurchaseCount } from "../../store/action/dashboardAction";
import Widget from "../../shared/Widget/Widget";
import { useNavigate } from "react-router-dom";
import { fetchAllSalePurchaseCount } from "../../store/action/allSalePurchaseAction";

const TodaySalePurchaseCount = (props) => {
    const {
        todaySalePurchaseCount,
        todayCount,
        frontSetting,
        config,
        allSalePurchase,
        fetchAllSalePurchaseCount,
        allConfigData,
    } = props;
    const navigate = useNavigate();

    useEffect(() => {
        todaySalePurchaseCount();
        fetchAllSalePurchaseCount();
    }, []);

    const onClick = (redirect, permission) => {
        if (
            config &&
            config.filter((item) => item === permission).length !== 0
        ) {
            navigate(`/${redirect}`);
        }
    };

    return (
        <Row className="g-4">
            <Col className="col-12 mb-4">
                <Row className="row g-3">
                    <Widget
                        title={getFormattedMessage("sales.title")}
                        onClick={() => onClick("app/sales", "manage_sale")}
                        allConfigData={allConfigData}
                        className={`widget-gradient-blue ${config &&
                            config.filter((item) => item === "manage_sale")
                                .length !== 0
                            ? "cursor-pointer"
                            : ""
                            }`}

                        icon={
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                                className="fs-1-xl text-white"
                            />
                        }
                        currency={
                            frontSetting.value &&
                            frontSetting.value.currency_symbol
                        }
                        value={
                            allSalePurchase.all_sales_count
                                ? parseFloat(
                                    allSalePurchase.all_sales_count
                                ).toFixed(2)
                                : "0.00"
                        }
                    />

                    <Widget
                        title={getFormattedMessage("purchases.title")}
                        allConfigData={allConfigData}
                        onClick={() =>
                            onClick("app/purchases", "manage_purchase")
                        }
                        className={`widget-gradient-purple ${config &&
                            config.filter((item) => item === "manage_purchase")
                                .length !== 0
                            ? "cursor-pointer"
                            : ""
                            }`}
                        icon={
                            <FontAwesomeIcon
                                icon={faCartPlus}
                                className="fs-1-xl text-white"
                            />
                        }
                        currency={
                            frontSetting.value &&
                            frontSetting.value.currency_symbol
                        }
                        value={
                            allSalePurchase.all_purchases_count
                                ? parseFloat(
                                    allSalePurchase.all_purchases_count
                                ).toFixed(2)
                                : "0.00"
                        }
                    />

                    <Widget
                        title={getFormattedMessage("sales-return.title")}
                        allConfigData={allConfigData}
                        onClick={() =>
                            onClick("app/sale-return", "manage_sale_return")
                        }
                        className={`widget-gradient-orange ${config &&
                            config.filter(
                                (item) => item === "manage_sale_return"
                            ).length !== 0
                            ? "cursor-pointer"
                            : ""
                            }`}
                        icon={
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="fs-1-xl text-white"
                            />
                        }
                        currency={
                            frontSetting.value &&
                            frontSetting.value.currency_symbol
                        }
                        value={
                            allSalePurchase.all_sale_return_count
                                ? parseFloat(
                                    allSalePurchase.all_sale_return_count
                                ).toFixed(2)
                                : "0.00"
                        }
                    />

                    <Widget
                        title={getFormattedMessage("purchases.return.title")}
                        allConfigData={allConfigData}
                        onClick={() =>
                            onClick(
                                "app/purchase-return",
                                "manage_purchase_return"
                            )
                        }
                        className={`widget-gradient-lightblue ${config &&
                            config.filter(
                                (item) => item === "manage_purchase_return"
                            ).length !== 0
                            ? "cursor-pointer"
                            : ""
                            }`}
                        icon={
                            <FontAwesomeIcon
                                icon={faArrowLeft}
                                className="fs-1-xl text-white"
                            />
                        }
                        currency={
                            frontSetting.value &&
                            frontSetting.value.currency_symbol
                        }
                        value={
                            allSalePurchase.all_purchase_return_count
                                ? parseFloat(
                                    allSalePurchase.all_purchase_return_count
                                ).toFixed(2)
                                : "0.00"
                        }
                    />

                    <Widget
                        title={getFormattedMessage(
                            "dashboard.widget.today-total-sales.label"
                        )}
                        allConfigData={allConfigData}
                        onClick={() => onClick("app/sales", "manage_sale")}
                        className="widget-gradient-yellow  cursor-pointer"
                        icon={
                            <FontAwesomeIcon
                                icon={faDollar}
                                className="fs-1-xl text-white"
                            />
                        }
                        currency={
                            frontSetting.value &&
                            frontSetting.value.currency_symbol
                        }
                        value={
                            todayCount.today_sales
                                ? parseFloat(todayCount.today_sales).toFixed(2)
                                : "0.00"
                        }
                    />

                    <Widget
                        title={getFormattedMessage(
                            "dashboard.widget.today-payment-received.label"
                        )}
                        allConfigData={allConfigData}
                        onClick={() => onClick("app/sales", "manage_sale")}
                        className="widget-gradient-green cursor-pointer"
                        icon={
                            <FontAwesomeIcon
                                icon={faMoneyBill}
                                className="fs-1-xl text-white"
                            />
                        }
                        currency={
                            frontSetting.value &&
                            frontSetting.value.currency_symbol
                        }
                        value={
                            todayCount.today_sales_received_count
                                ? parseFloat(
                                    todayCount.today_sales_received_count
                                ).toFixed(2)
                                : "0.00"
                        }
                    />

                    <Widget
                        title={getFormattedMessage(
                            "dashboard.widget.today-total-purchases.label"
                        )}
                        allConfigData={allConfigData}
                        onClick={() =>
                            onClick("app/purchases", "manage_purchase")
                        }
                        className="widget-gradient-red cursor-pointer"
                        icon={
                            <FontAwesomeIcon
                                icon={faCartPlus}
                                className="fs-1-xl text-white"
                            />
                        }
                        currency={
                            frontSetting.value &&
                            frontSetting.value.currency_symbol
                        }
                        value={
                            todayCount.today_purchases
                                ? parseFloat(
                                    todayCount.today_purchases
                                ).toFixed(2)
                                : "0.00"
                        }
                    />

                    <Widget
                        title={getFormattedMessage(
                            "dashboard.widget.today-total-expense.label"
                        )}
                        allConfigData={allConfigData}
                        onClick={() =>
                            onClick("app/expenses", "manage_expenses")
                        }
                        className="widget-gradient-pink cursor-pointer"
                        icon={
                            <FontAwesomeIcon
                                icon={faSquareMinus}
                                className="fs-1-xl text-white"
                            />
                        }
                        currency={
                            frontSetting.value &&
                            frontSetting.value.currency_symbol
                        }
                        value={
                            todayCount.today_expense_count
                                ? parseFloat(
                                    todayCount.today_expense_count
                                ).toFixed(2)
                                : "0.00"
                        }
                    />
                </Row>
            </Col>
        </Row>
    );
};
const mapStateToProps = (state) => {
    const { todayCount, allSalePurchase, config, allConfigData } = state;
    return { todayCount, allSalePurchase, config, allConfigData };
};

export default connect(mapStateToProps, {
    todaySalePurchaseCount,
    fetchAllSalePurchaseCount,
})(TodaySalePurchaseCount);
