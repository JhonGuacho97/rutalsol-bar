import { lazy } from "react";
import { Permissions } from "./constants";

import Dashboard from "./components/dashboard/Dashboard";

const Brands = lazy(() => import("./components/brands/Brands"));
const Currencies = lazy(() => import("./components/currency/Currencies"));
const Warehouses = lazy(() => import("./components/warehouse/Warehouses"));
const CreateWarehouse = lazy(() => import("./components/warehouse/CreateWarehouse"));
const EditWarehouse = lazy(() => import("./components/warehouse/EditWarehouse"));
const ProductCategory = lazy(() => import("./components/productCategory/ProductCategory"));
const Units = lazy(() => import("./components/units/Units"));
const Suppliers = lazy(() => import("./components/supplier/Suppliers"));
const CreateSupplier = lazy(() => import("./components/supplier/CreateSupplier"));
const EditSupplier = lazy(() => import("./components/supplier/EditSupplier"));
const Customers = lazy(() => import("./components/customer/Customers"));
const CreateCustomer = lazy(() => import("./components/customer/CreateCustomer"));
const EditCustomer = lazy(() => import("./components/customer/EditCustomer"));
const User = lazy(() => import("./components/users/User"));
const CreateUser = lazy(() => import("./components/users/CreateUser"));
const EditUser = lazy(() => import("./components/users/EditUser"));
const UserDetail = lazy(() => import("./components/users/UserDetail"));
const UpdateProfile = lazy(() => import("./components/user-profile/UpdateProfile"));
const Product = lazy(() => import("./components/product/Product"));
const CreateProduct = lazy(() => import("./components/product/CreateProduct"));
const EditProduct = lazy(() => import("./components/product/EditProduct"));
const ProductDetail = lazy(() => import("./components/product/ProductDetail"));
const Settings = lazy(() => import("./components/settings/Settings"));
const ExpenseCategory = lazy(() => import("./components/expense-category/ExpenseCategory"));
const Expenses = lazy(() => import("./components/expense/Expenses"));
const CreateExpense = lazy(() => import("./components/expense/CreateExpense"));
const EditExpense = lazy(() => import("./components/expense/EditExpense"));
const Purchases = lazy(() => import("./components/purchase/Purchases"));
const CreatePurchase = lazy(() => import("./components/purchase/CreatePurchase"));
const EditPurchase = lazy(() => import("./components/purchase/EditPurchase"));
const PurchaseDetails = lazy(() => import("./components/purchase/PurchaseDetails"));
const PosMainPage = lazy(() => import("./frontend/components/PosMainPage"));
const PrintData = lazy(() => import("./frontend/components/printModal/PrintData"));
const Sales = lazy(() => import("./components/sales/Sales"));
const CreateSale = lazy(() => import("./components/sales/CreateSale"));
const EditSale = lazy(() => import("./components/sales/EditSale"));
const SaleReturn = lazy(() => import("./components/saleReturn/SaleReturn"));
const CreateSaleReturn = lazy(() => import("./components/saleReturn/CreateSaleReturn"));
const EditSaleReturn = lazy(() => import("./components/saleReturn/EditSaleReturn"));
const SaleReturnDetails = lazy(() => import("./components/saleReturn/SaleReturnDetails"));
const SaleDetails = lazy(() => import("./components/sales/SaleDetails"));
const PurchaseReturn = lazy(() => import("./components/purchaseReturn/PurchaseReturn"));
const CreatePurchaseReturn = lazy(() => import("./components/purchaseReturn/CreatePurchaseReturn"));
const EditPurchaseReturn = lazy(() => import("./components/purchaseReturn/EditPurchaseReturn"));
const PurchaseReturnDetails = lazy(() => import("./components/purchaseReturn/PurchaseReturnDetails"));
const WarehouseReport = lazy(() => import("./components/report/warehouseReport/WarehouseReport"));
const SaleReport = lazy(() => import("./components/report/saleReport/SaleReport"));
const StockReport = lazy(() => import("./components/report/stockReport/StockReport"));
const StockDetails = lazy(() => import("./components/report/stockReport/StockDetails"));
const TopSellingProductsReport = lazy(() => import("./components/report/topSellingReport/TopSellingProductsReport"));
const PurchaseReport = lazy(() => import("./components/report/purchaseReport/PurchaseReport"));
const PrintBarcode = lazy(() => import("./components/printBarcode/PrintBarcode"));
const Role = lazy(() => import("./components/roles/Role"));
const CreateRole = lazy(() => import("./components/roles/CreateRole"));
const EditRole = lazy(() => import("./components/roles/EditRole"));
const Adjustments = lazy(() => import("./components/adjustments/Adjustments"));
const CreateAdjustment = lazy(() => import("./components/adjustments/CreateAdjustment"));
const EditAdjustMent = lazy(() => import("./components/adjustments/EditAdjustMent"));
const WarehouseDetail = lazy(() => import("./components/warehouse/WarehouseDetail"));
const ProductQuantityReport = lazy(() => import("./components/report/productQuantityReport/ProductQuantityReport"));
const Transfers = lazy(() => import("./components/transfers/Transfers"));
const EditTransfer = lazy(() => import("./components/transfers/EditTransfer"));
const CreateTransfer = lazy(() => import("./components/transfers/CreateTransfer"));
const Prefixes = lazy(() => import("./components/settings/Prefixes"));
const SuppliersReport = lazy(() => import("./components/report/supplier-report/SuppliersReport"));
const SupplierReportDetails = lazy(() => import("./components/report/supplier-report/SupplierReportDetails"));
const EmailTemplates = lazy(() => import("./components/Email-templates/EmailTemplates"));
const EditEmailTemplate = lazy(() => import("./components/Email-templates/EditEmailTemplate"));
const Quotations = lazy(() => import("./components/quotations/Quotations"));
const CreateQuotation = lazy(() => import("./components/quotations/CreateQuotation"));
const EditQuotation = lazy(() => import("./components/quotations/EditQuotation"));
const CreateQuotationSale = lazy(() => import("./components/quotations/CreateQuotationSale"));
const QuotationDetails = lazy(() => import("./components/quotations/QuotationDetails"));
const MailSettings = lazy(() => import("./components/settings/MailSettings"));
const SmsTemplates = lazy(() => import("./components/sms-templates/SmsTemplates"));
const EditSmsTemplate = lazy(() => import("./components/sms-templates/EditSmsTemplate"));
const BestCustomerReport = lazy(() => import("./components/report/best-customerReport/BestCustomerReport"));
const ProfitLossReport = lazy(() => import("./components/report/ProfitLossReport/ProfitLossReport"));
const CustomerReportDetails = lazy(() => import("./components/report/customer-report/CustomerReportDetails"));
const CustomersReport = lazy(() => import("./components/report/customer-report/CustomersReport"));
const SmsApi = lazy(() => import("./components/sms-api/SmsApi"));
const EditSaleReturnFromSale = lazy(() => import("./components/saleReturn/EditSaleReturnFromSale"));
const Language = lazy(() => import("./components/languages/Language"));
const EditLanguageData = lazy(() => import("./components/languages/EditLanguageData"));
const BaseUnits = lazy(() => import("./components/base-unit/BaseUnits"));
const RegisterReport = lazy(() => import("./components/report/registerReport/RegisterReport"));
const Variation = lazy(() => import("./components/variation/Variation"));
const LoginLogs = lazy(() => import("./components/loginLogs/LoginLogs"));

export const route = [
    {
        path: "dashboard",
        ele: <Dashboard />,
        permission: Permissions.MANAGE_DASHBOARD,
    },
    {
        path: "brands",
        ele: <Brands />,
        permission: Permissions.MANAGE_BRANDS,
    },
    {
        path: "currencies",
        ele: <Currencies />,
        permission: Permissions.MANAGE_CURRENCY,
    },
    {
        path: "warehouse",
        ele: <Warehouses />,
        permission: Permissions.MANAGE_WAREHOUSES,
    },
    {
        path: "warehouse/create",
        ele: <CreateWarehouse />,
        permission: Permissions.MANAGE_WAREHOUSES,
    },
    {
        path: "warehouse/edit/:id",
        ele: <EditWarehouse />,
        permission: Permissions.MANAGE_WAREHOUSES,
    },
    {
        path: "warehouse/detail/:id",
        ele: <WarehouseDetail />,
        permission: Permissions.MANAGE_WAREHOUSES,
    },
    {
        path: "product-categories",
        ele: <ProductCategory />,
        permission: Permissions.MANAGE_PRODUCT_CATEGORIES,
    },
    {
        path: "variations",
        ele: <Variation />,
        permission: Permissions.MANAGE_VARIATIONS,
    },

    {
        path: "units",
        ele: <Units />,
        permission: Permissions.MANAGE_UNITS,
    },
    {
        path: "base-units",
        ele: <BaseUnits />,
        permission: Permissions.MANAGE_UNITS,
    },
    {
        path: "suppliers",
        ele: <Suppliers />,
        permission: Permissions.MANAGE_SUPPLIERS,
    },
    {
        path: "suppliers/create",
        ele: <CreateSupplier />,
        permission: Permissions.MANAGE_SUPPLIERS,
    },
    {
        path: "suppliers/edit/:id",
        ele: <EditSupplier />,
        permission: Permissions.MANAGE_SUPPLIERS,
    },
    {
        path: "customers",
        ele: <Customers />,
        permission: Permissions.MANAGE_CUSTOMERS,
    },
    {
        path: "customers/create",
        ele: <CreateCustomer />,
        permission: Permissions.MANAGE_CUSTOMERS,
    },
    {
        path: "customers/edit/:id",
        ele: <EditCustomer />,
        permission: Permissions.MANAGE_CUSTOMERS,
    },
    {
        path: "users",
        ele: <User />,
        permission: Permissions.MANAGE_USER,
    },
    {
        path: "users/create",
        ele: <CreateUser />,
        permission: Permissions.MANAGE_USER,
    },
    {
        path: "users/edit/:id",
        ele: <EditUser />,
        permission: Permissions.MANAGE_USER,
    },
    {
        path: "users/detail/:id",
        ele: <UserDetail />,
        permission: Permissions.MANAGE_USER,
    },
    {
        path: "profile/edit",
        ele: <UpdateProfile />,
        permission: "",
    },
    {
        path: "products",
        ele: <Product />,
        permission: Permissions.MANAGE_PRODUCTS,
    },
    {
        path: "products/create",
        ele: <CreateProduct />,
        permission: Permissions.MANAGE_PRODUCTS,
    },
    {
        path: "products/edit/:id",
        ele: <EditProduct />,
        permission: Permissions.MANAGE_PRODUCTS,
    },
    {
        path: "products/detail/:id",
        ele: <ProductDetail />,
        permission: Permissions.MANAGE_PRODUCTS,
    },
    {
        path: "adjustments",
        ele: <Adjustments />,
        permission: Permissions.MANAGE_ADJUSTMENTS,
    },
    {
        path: "adjustments/create",
        ele: <CreateAdjustment />,
        permission: Permissions.MANAGE_ADJUSTMENTS,
    },
    {
        path: "adjustments/:id",
        ele: <EditAdjustMent />,
        permission: Permissions.MANAGE_ADJUSTMENTS,
    },
    {
        path: "settings",
        ele: <Settings />,
        permission: Permissions.MANAGE_SETTING,
    },
    {
        path: "prefixes",
        ele: <Prefixes />,
        permission: Permissions.MANAGE_SETTING,
    },
    {
        path: "mail-settings",
        ele: <MailSettings />,
        permission: Permissions.MANAGE_SETTING,
    },
    {
        path: "expense-categories",
        ele: <ExpenseCategory />,
        permission: Permissions.MANAGE_EXPENSES_CATEGORIES,
    },
    {
        path: "expenses",
        ele: <Expenses />,
        permission: Permissions.MANAGE_EXPENSES,
    },
    {
        path: "expenses/create",
        ele: <CreateExpense />,
        permission: Permissions.MANAGE_EXPENSES,
    },
    {
        path: "expenses/edit/:id",
        ele: <EditExpense />,
        permission: Permissions.MANAGE_EXPENSES,
    },
    {
        path: "purchases",
        ele: <Purchases />,
        permission: Permissions.MANAGE_PURCHASE,
    },
    {
        path: "purchases/create",
        ele: <CreatePurchase />,
        permission: Permissions.MANAGE_PURCHASE,
    },
    {
        path: "purchases/edit/:id",
        ele: <EditPurchase />,
        permission: Permissions.MANAGE_PURCHASE,
    },
    {
        path: "purchases/detail/:id",
        ele: <PurchaseDetails />,
        permission: Permissions.MANAGE_PURCHASE,
    },
    {
        path: "pos",
        ele: <PosMainPage />,
        permission: Permissions.MANAGE_POS_SCREEN,
    },
    {
        path: "/payment",
        ele: <PrintData />,
        permission: "",
    },
    {
        path: "user-detail",
        ele: <UserDetail />,
        permission: Permissions.MANAGE_USER,
    },
    {
        path: "sales",
        ele: <Sales />,
        permission: Permissions.MANAGE_SALE,
    },
    {
        path: "sales/create",
        ele: <CreateSale />,
        permission: Permissions.MANAGE_SALE,
    },
    {
        path: "sales/edit/:id",
        ele: <EditSale />,
        permission: Permissions.MANAGE_SALE,
    },
    {
        path: "sales/return/:id",
        ele: <CreateSaleReturn />,
        permission: Permissions.MANAGE_SALE_RETURN,
    },
    {
        path: "sales/return/edit/:id",
        ele: <EditSaleReturnFromSale />,
        permission: Permissions.MANAGE_SALE_RETURN,
    },
    {
        path: "quotations",
        ele: <Quotations />,
        permission: Permissions.MANAGE_QUOTATION,
    },
    {
        path: "quotations/create",
        ele: <CreateQuotation />,
        permission: Permissions.MANAGE_QUOTATION,
    },
    {
        path: "quotations/edit/:id",
        ele: <EditQuotation />,
        permission: Permissions.MANAGE_QUOTATION,
    },
    {
        path: "quotations/Create_sale/:id",
        ele: <CreateQuotationSale />,
        permission: Permissions.MANAGE_QUOTATION,
    },
    {
        path: "quotations/detail/:id",
        ele: <QuotationDetails />,
        permission: Permissions.MANAGE_QUOTATION,
    },
    {
        path: "sale-return",
        ele: <SaleReturn />,
        permission: Permissions.MANAGE_SALE_RETURN,
    },
    {
        path: "sale-return/edit/:id",
        ele: <EditSaleReturn />,
        permission: Permissions.MANAGE_SALE_RETURN,
    },
    {
        path: "sale-return/detail/:id",
        ele: <SaleReturnDetails />,
        permission: Permissions.MANAGE_SALE_RETURN,
    },
    {
        path: "sales/detail/:id",
        ele: <SaleDetails />,
        permission: Permissions.MANAGE_SALE,
    },
    {
        path: "purchase-return",
        ele: <PurchaseReturn />,
        permission: Permissions.MANAGE_PURCHASE_RETURN,
    },
    {
        path: "purchase-return/create",
        ele: <CreatePurchaseReturn />,
        permission: Permissions.MANAGE_PURCHASE_RETURN,
    },
    {
        path: "purchase-return/edit/:id",
        ele: <EditPurchaseReturn />,
        permission: Permissions.MANAGE_PURCHASE_RETURN,
    },
    {
        path: "purchase-return/detail/:id",
        ele: <PurchaseReturnDetails />,
        permission: Permissions.MANAGE_PURCHASE_RETURN,
    },
    {
        path: "report/report-warehouse",
        ele: <WarehouseReport />,
        permission: Permissions.MANAGE_REPORTS,
    },
    {
        path: "report/report-sale",
        ele: <SaleReport />,
        permission: Permissions.MANAGE_REPORTS,
    },
    {
        path: "report/report-stock",
        ele: <StockReport />,
        permission: Permissions.MANAGE_REPORTS,
    },
    {
        path: "report/report-detail-stock/:id",
        ele: <StockDetails />,
        permission: Permissions.MANAGE_REPORTS,
    },
    {
        path: "report/report-top-selling-products",
        ele: <TopSellingProductsReport />,
        permission: Permissions.MANAGE_REPORTS,
    },
    {
        path: "report/report-product-quantity",
        ele: <ProductQuantityReport />,
        permission: Permissions.MANAGE_REPORTS,
    },
    {
        path: "report/report-purchase",
        ele: <PurchaseReport />,
        permission: Permissions.MANAGE_REPORTS,
    },
    {
        path: "report/suppliers",
        ele: <SuppliersReport />,
        permission: Permissions.MANAGE_REPORTS,
    },
    {
        path: "report/profit-loss",
        ele: <ProfitLossReport />,
        permission: Permissions.MANAGE_REPORTS,
    },
    {
        path: "report/suppliers/details/:id",
        ele: <SupplierReportDetails />,
        permission: Permissions.MANAGE_REPORTS,
    },
    {
        path: "print/barcode",
        ele: <PrintBarcode />,
        permission: Permissions.MANAGE_PRODUCTS,
    },
    {
        path: "roles",
        ele: <Role />,
        permission: Permissions.MANAGE_ROLES,
    },
    {
        path: "roles/create",
        ele: <CreateRole />,
        permission: Permissions.MANAGE_ROLES,
    },
    {
        path: "roles/edit/:id",
        ele: <EditRole />,
        permission: Permissions.MANAGE_ROLES,
    },
    {
        path: "transfers",
        ele: <Transfers />,
        permission: Permissions.MANAGE_TRANSFERS,
    },
    {
        path: "transfers/create",
        ele: <CreateTransfer />,
        permission: Permissions.MANAGE_TRANSFERS,
    },
    {
        path: "transfers/:id",
        ele: <EditTransfer />,
        permission: Permissions.MANAGE_TRANSFERS,
    },
    {
        path: "email-templates",
        ele: <EmailTemplates />,
        permission: Permissions.MANAGE_EMAIL_TEMPLATES,
    },
    {
        path: "email-templates/:id",
        ele: <EditEmailTemplate />,
        permission: Permissions.MANAGE_EMAIL_TEMPLATES,
    },
    {
        path: "sms-templates",
        ele: <SmsTemplates />,
        permission: Permissions.MANAGE_SMS_TEMPLATES,
    },
    {
        path: "sms-templates/:id",
        ele: <EditSmsTemplate />,
        permission: Permissions.MANAGE_SMS_TEMPLATES,
    },
    {
        path: "report/best-customers",
        ele: <BestCustomerReport />,
        permission: "",
    },
    {
        path: "report/customers",
        ele: <CustomersReport />,
        permission: "",
    },
    {
        path: "report/customers/details/:id",
        ele: <CustomerReportDetails />,
        permission: "",
    },
    {
        path: "report/register",
        ele: <RegisterReport />,
        permission: "",
    },
    {
        path: "sms-api",
        ele: <SmsApi />,
        permission: Permissions.MANAGE_SMS_API,
    },
    {
        path: "languages",
        ele: <Language />,
        permission: Permissions.MANAGE_LANGUAGES,
    },
    {
        path: "languages/:id",
        ele: <EditLanguageData />,
        permission: Permissions.MANAGE_LANGUAGES,
    },
    {
        path: "login-logs",
        ele: <LoginLogs />,
        permission: "",
    },
];
