<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "//www.w3.org/TR/html4/strict.dtd">
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>{{ __('messages.sale_pdf') }}</title>
    <style>
        * {
            font-family: DejaVu Sans, Arial, "Helvetica", Arial, "Liberation Sans", sans-serif;
            box-sizing: border-box;
        }

        body {
            background: #ffffff;
            color: #374151;
            font-size: 13px;
            margin: 0;
            padding: 24px 32px;
        }

        /* ── Encabezado ── */
        .header-table {
            width: 100%;
            margin-bottom: 24px;
            border-bottom: 2px solid #ede9fe;
            padding-bottom: 16px;
        }

        .reference-code {
            font-size: 22px;
            font-weight: 700;
            color: #4f46e5;
            text-align: center;
            margin: 0;
        }

        .invoice-label {
            font-size: 11px;
            color: #a78bfa;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            margin: 4px 0 0;
        }

        .meta-label {
            font-size: 11px;
            font-weight: 700;
            color: #a78bfa;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            padding: 3px 6px 3px 0;
        }

        .meta-value {
            font-size: 12px;
            color: #374151;
            padding: 3px 0;
        }

        /* ── Badge estado pago ── */
        .badge-paid {
            background: #dcfce7;
            color: #15803d;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 700;
            padding: 2px 10px;
        }

        .badge-unpaid {
            background: #fee2e2;
            color: #b91c1c;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 700;
            padding: 2px 10px;
        }

        /* ── Tarjetas info ── */
        .info-section {
            width: 100%;
            margin-bottom: 24px;
        }

        .info-card {
            width: 47%;
            vertical-align: top;
        }

        .info-card-header {
            background: #4f46e5;
            color: #ffffff;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.07em;
            padding: 8px 14px;
        }

        .info-card-body {
            background: #faf8ff;
            border: 1px solid #ede9fe;
            padding: 10px 14px;
            line-height: 1.8;
        }

        .info-label {
            font-size: 11px;
            font-weight: 700;
            color: #a78bfa;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            padding: 3px 8px 3px 0;
            width: 30%;
        }

        .info-value {
            font-size: 12px;
            color: #374151;
            padding: 3px 0;
        }

        .company-name {
            font-size: 14px;
            font-weight: 700;
            color: #4f46e5;
            margin: 0 0 6px 0;
        }

        /* ── Tabla productos ── */
        .products-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 24px;
        }

        .products-table thead tr {
            background: #4f46e5;
        }

        .products-table thead th {
            color: #ffffff;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            padding: 9px 10px;
            text-align: center;
        }

        .products-table thead th:first-child {
            text-align: left;
        }

        .products-table tbody tr {
            border-bottom: 1px solid #ede9fe;
        }

        .products-table tbody tr:nth-child(even) {
            background: #faf8ff;
        }

        .products-table tbody tr:nth-child(odd) {
            background: #ffffff;
        }

        .products-table tbody td {
            padding: 8px 10px;
            font-size: 12px;
            color: #374151;
            text-align: center;
        }

        .products-table tbody td:first-child {
            text-align: left;
            font-weight: 600;
            color: #4f46e5;
        }

        /* ── Tabla totales ── */
        .totals-table {
            width: 44%;
            border-collapse: collapse;
            margin-left: auto;
            border: 1px solid #ede9fe;
        }

        .totals-table tbody tr {
            border-bottom: 1px solid #ede9fe;
        }

        .totals-table tbody tr:last-child {
            background: #4f46e5;
            border-bottom: none;
        }

        .totals-table tbody tr:last-child td {
            color: #ffffff !important;
            font-weight: 700 !important;
            font-size: 13px !important;
        }

        .totals-table tbody td {
            padding: 8px 14px;
            font-size: 12px;
            color: #374151;
        }

        .totals-table tbody td:first-child {
            font-weight: 600;
            color: #6b7280;
            background: #faf8ff;
            width: 60%;
        }

        .totals-table tbody td:last-child {
            text-align: right;
            font-weight: 600;
            color: #4f46e5;
        }

        /* ── Footer ── */
        .pdf-footer {
            margin-top: 32px;
            border-top: 1px solid #ede9fe;
            padding-top: 12px;
            text-align: center;
            font-size: 11px;
            color: #a78bfa;
        }

        @if(getLoginUserLanguage() == 'vi')
            .vi-bold-text {
                font-size: 14px;
                font-weight: bolder;
                color: #333;
            }

            .vi-light-text {
                font-size: 16px;
            }

        @endif
    </style>
</head>

<body>

    {{-- ── ENCABEZADO ── --}}
    <table class="header-table" cellpadding="0" cellspacing="0">
        <tr>
            <td width="20%">
                {{-- Logo desactivado por compatibilidad con DomPDF en local --}}
                <p style="font-size:18px;font-weight:700;color:#4f46e5;margin:0;">
                    {{ getSettingValue('company_name') }}
                </p>
            </td>
            <td width="40%" align="center">
                <p class="reference-code">{{ $sale->reference_code }}</p>
                <p class="invoice-label">
                    {{ getLoginUserLanguage() == 'cn' ? 'Sales Invoice' : __('messages.sale_pdf') }}
                </p>
            </td>
            <td width="40%" align="right">
                <table cellpadding="0" cellspacing="0" align="right">
                    <tr>
                        <td class="meta-label">{{ getLoginUserLanguage() == 'cn' ? 'Date' : __('messages.pdf.date') }}:
                        </td>
                        <td class="meta-value">{{ \Carbon\Carbon::parse($sale->created_at)->format('Y-m-d') }}</td>
                    </tr>
                    <tr>
                        <td class="meta-label">
                            {{ getLoginUserLanguage() == 'cn' ? 'Number' : __('messages.pdf.number') }}:</td>
                        <td class="meta-value">{{ $sale->reference_code }}</td>
                    </tr>
                    <tr>
                        <td class="meta-label">
                            {{ getLoginUserLanguage() == 'cn' ? 'Status' : __('messages.pdf.payment_status') }}:</td>
                        <td class="meta-value">
                            @if($sale->payment_status == \App\Models\Sale::PAID)
                                <span class="badge-paid">Paid</span>
                            @else
                                <span class="badge-unpaid">Unpaid</span>
                            @endif
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    {{-- ── INFO CLIENTE + EMPRESA ── --}}
    <table class="info-section" cellpadding="0" cellspacing="8">
        <tr>
            {{-- Cliente --}}
            <td class="info-card" style="padding-right:10px;">
                <div class="info-card-header">
                    {{ getLoginUserLanguage() == 'cn' ? 'Customer Info' : __('messages.pdf.customer_info') }}
                </div>
                <div class="info-card-body">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td class="info-label">
                                {{ getLoginUserLanguage() == 'cn' ? 'Name' : __('messages.pdf.name') }}</td>
                            <td class="info-value">{{ isset($sale->customer->name) ? $sale->customer->name : 'N/A' }}
                            </td>
                        </tr>
                        <tr>
                            <td class="info-label">
                                {{ getLoginUserLanguage() == 'cn' ? 'Phone' : __('messages.pdf.phone') }}</td>
                            <td class="info-value">{{ isset($sale->customer->phone) ? $sale->customer->phone : 'N/A' }}
                            </td>
                        </tr>
                        <tr>
                            <td class="info-label">
                                {{ getLoginUserLanguage() == 'cn' ? 'Address' : __('messages.pdf.address') }}</td>
                            <td class="info-value">
                                {{ isset($sale->customer->address) ? $sale->customer->address : '' }}
                                {{ isset($sale->customer->city) ? $sale->customer->city : '' }}
                                {{ isset($sale->customer->country) ? $sale->customer->country : '' }}
                            </td>
                        </tr>
                        <tr>
                            <td class="info-label">
                                {{ getLoginUserLanguage() == 'cn' ? 'Email' : __('messages.pdf.email') }}</td>
                            <td class="info-value">{{ isset($sale->customer->email) ? $sale->customer->email : '' }}
                            </td>
                        </tr>
                    </table>
                </div>
            </td>

            {{-- Empresa --}}
            <td class="info-card" style="padding-left:10px;">
                <div class="info-card-header">
                    {{ getLoginUserLanguage() == 'cn' ? 'Company Info' : __('messages.pdf.company_info') }}
                </div>
                <div class="info-card-body">
                    <p class="company-name">{{ getSettingValue('company_name') }}</p>
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td class="info-label">
                                {{ getLoginUserLanguage() == 'cn' ? 'Address' : __('messages.pdf.address') }}</td>
                            <td class="info-value">{{ getSettingValue('address') }}</td>
                        </tr>
                        <tr>
                            <td class="info-label">
                                {{ getLoginUserLanguage() == 'cn' ? 'Phone' : __('messages.pdf.phone') }}</td>
                            <td class="info-value">{{ getSettingValue('phone') }}</td>
                        </tr>
                        <tr>
                            <td class="info-label">
                                {{ getLoginUserLanguage() == 'cn' ? 'Email' : __('messages.pdf.email') }}</td>
                            <td class="info-value">{{ getSettingValue('email') }}</td>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>
    </table>

    {{-- ── TABLA DE PRODUCTOS ── --}}
    <table class="products-table" cellpadding="0" cellspacing="0">
        <thead>
            <tr>
                <th style="text-align:left;">
                    {{ getLoginUserLanguage() == 'cn' ? 'Product' : __('messages.pdf.product') }}</th>
                <th>{{ getLoginUserLanguage() == 'cn' ? 'Unit Price' : __('messages.pdf.unit_price') }}</th>
                <th>{{ getLoginUserLanguage() == 'cn' ? 'Qty' : __('messages.pdf.quantity') }}</th>
                <th>{{ getLoginUserLanguage() == 'cn' ? 'Discount' : __('messages.heading_discount') }}</th>
                <th>{{ getLoginUserLanguage() == 'cn' ? 'Tax' : __('messages.pdf.tax') }}</th>
                <th>{{ getLoginUserLanguage() == 'cn' ? 'Total' : __('messages.heading_total') }}</th>
            </tr>
        </thead>
        <tbody>
            @foreach($sale->saleItems as $saleItem)
                <tr>
                    <td>{{ $saleItem->product->name }}</td>
                    <td>{{ currencyAlignment(number_format((float) $saleItem->net_unit_price, 2)) }}</td>
                    <td>{{ $saleItem->quantity }}</td>
                    <td>{{ currencyAlignment(number_format((float) $saleItem->discount_amount, 2)) }}</td>
                    <td>{{ currencyAlignment(number_format((float) $saleItem->tax_amount, 2)) }}</td>
                    <td>{{ currencyAlignment(number_format((float) $saleItem->sub_total, 2)) }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

    {{-- ── TOTALES ── --}}
    <table class="totals-table" cellpadding="0" cellspacing="0">
        <tbody>
            <tr>
                <td>{{ getLoginUserLanguage() == 'cn' ? 'Order Tax' : __('messages.pdf.order_tax') }}</td>
                <td>{{ currencyAlignment(number_format((float) $sale->tax_amount, 2)) }}</td>
            </tr>
            <tr>
                <td>{{ getLoginUserLanguage() == 'cn' ? 'Discount' : __('messages.pdf.discount') }}</td>
                <td>{{ currencyAlignment(number_format((float) $sale->discount, 2)) }}</td>
            </tr>
            <tr>
                <td>{{ getLoginUserLanguage() == 'cn' ? 'Shipping' : __('messages.pdf.shipping') }}</td>
                <td>{{ currencyAlignment(number_format((float) $sale->shipping, 2)) }}</td>
            </tr>
            <tr>
                <td>{{ getLoginUserLanguage() == 'cn' ? 'Paid Amount' : __('messages.pdf.paid_amount') }}</td>
                <td>{{ currencyAlignment(number_format((float) $sale->payments->sum('amount'), 2)) }}</td>
            </tr>
            <tr>
                <td>{{ getLoginUserLanguage() == 'cn' ? 'Total' : __('messages.heading_total') }}</td>
                <td>{{ currencyAlignment(number_format((float) $sale->grand_total, 2)) }}</td>
            </tr>
        </tbody>
    </table>

    {{-- ── FOOTER ── --}}
    <div class="pdf-footer">
        {{ getSettingValue('company_name') }} &nbsp;·&nbsp;
        {{ \Carbon\Carbon::parse($sale->created_at)->format('Y-m-d') }}
    </div>

</body>

</html>