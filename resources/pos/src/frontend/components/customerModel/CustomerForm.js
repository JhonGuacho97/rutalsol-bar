// src/components/pos/CustomerForm.jsx

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { editCustomer } from '../../../store/action/customerAction';
import { addCustomer } from '../../../store/action/pos/customerAction';
import ModelFooter from '../../../shared/components/modelFooter';
import { getFormattedMessage, placeholderText, numValidate } from '../../../shared/sharedMethod';
import IdentificacionField from '../../../components/customer/identificacionField';
import { useCustomerForm } from '../../../hooks/useCustomerFom';

const CustomerForm = (props) => {
    const { show, hide, singleCustomer } = props;

    const {
        customerData,
        customerValue,
        errors,
        sriLoading,
        isDisabled,
        onChangeInput,
        handleSriLookup,
    } = useCustomerForm({
        singleCustomer,
        addCustomerData: (values) => props.addCustomer(values, hide),
        editCustomer: props.editCustomer,
        id: singleCustomer?.[0]?.id,
    });

    const onSubmit = (event) => {
        event.preventDefault();
        props.addCustomer(customerValue, hide);
    };

    return (
        <Modal show={show} onHide={() => hide(false)} keyboard={true} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>
                    {getFormattedMessage('customer.create.title')}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0">
                <div className="card">
                    <div className="card-body">
                        <Form onSubmit={onSubmit}>
                            <div className="row">

                                {/* Tipo identificación */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        Tipo de identificación:
                                    </label>
                                    <select
                                        name="tipo_identificacion"
                                        className="form-control"
                                        value={customerValue.tipo_identificacion}
                                        onChange={onChangeInput}
                                    >
                                        <option value="05">Cédula</option>
                                        <option value="04">RUC</option>
                                        <option value="06">Pasaporte</option>
                                        <option value="07">Consumidor Final</option>
                                    </select>
                                </div>

                                {/* Identificación con validación y botón SRI */}
                                <IdentificacionField
                                    tipo={customerValue.tipo_identificacion}
                                    value={customerValue.identification}
                                    onChange={onChangeInput}
                                    error={errors.identification}
                                    isEdit={false}
                                    sriLoading={sriLoading}
                                    onSriLookup={handleSriLookup}
                                />

                                {/* Nombre */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        {getFormattedMessage('globally.input.name.label')}:
                                        <span className="required" />
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                        placeholder={placeholderText('globally.input.name.placeholder.label')}
                                        value={customerValue.name}
                                        onChange={onChangeInput}
                                        autoFocus
                                    />
                                    {errors.name && (
                                        <span className="text-danger d-block fw-400 fs-small mt-2">
                                            {errors.name}
                                        </span>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        {getFormattedMessage('globally.input.email.label')}:
                                        <span className="required" />
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        placeholder={placeholderText('globally.input.email.placeholder.label')}
                                        value={customerValue.email}
                                        onChange={onChangeInput}
                                    />
                                    {errors.email && (
                                        <span className="text-danger d-block fw-400 fs-small mt-2">
                                            {errors.email}
                                        </span>
                                    )}
                                </div>

                                {/* Teléfono */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        {getFormattedMessage('globally.input.phone-number.label')}:
                                        <span className="required" />
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                        placeholder={placeholderText('globally.input.phone-number.placeholder.label')}
                                        onKeyPress={(e) => numValidate(e)}
                                        value={customerValue.phone}
                                        onChange={onChangeInput}
                                    />
                                    {errors.phone && (
                                        <span className="text-danger d-block fw-400 fs-small mt-2">
                                            {errors.phone}
                                        </span>
                                    )}
                                </div>

                                {/* País */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        {getFormattedMessage('globally.input.country.label')}:
                                        <span className="required" />
                                    </label>
                                    <input
                                        type="text"
                                        name="country"
                                        className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                                        placeholder={placeholderText('globally.input.country.placeholder.label')}
                                        value={customerValue.country}
                                        onChange={onChangeInput}
                                    />
                                    {errors.country && (
                                        <span className="text-danger d-block fw-400 fs-small mt-2">
                                            {errors.country}
                                        </span>
                                    )}
                                </div>

                                {/* Ciudad */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        {getFormattedMessage('globally.input.city.label')}:
                                        <span className="required" />
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                                        placeholder={placeholderText('globally.input.city.placeholder.label')}
                                        value={customerValue.city}
                                        onChange={onChangeInput}
                                    />
                                    {errors.city && (
                                        <span className="text-danger d-block fw-400 fs-small mt-2">
                                            {errors.city}
                                        </span>
                                    )}
                                </div>

                                {/* Dirección */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        {getFormattedMessage('globally.input.address.label')}:
                                        <span className="required" />
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                        placeholder={placeholderText('globally.input.address.placeholder.label')}
                                        value={customerValue.address}
                                        onChange={onChangeInput}
                                    />
                                    {errors.address && (
                                        <span className="text-danger d-block fw-400 fs-small mt-2">
                                            {errors.address}
                                        </span>
                                    )}
                                </div>

                                <ModelFooter
                                    onEditRecord={customerData}
                                    onSubmit={onSubmit}
                                    editDisabled={isDisabled}
                                    addDisabled={!customerValue.name}
                                    link="/app/pos"
                                    modelhide={hide}
                                />
                            </div>
                        </Form>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default connect(null, { editCustomer, addCustomer })(CustomerForm);