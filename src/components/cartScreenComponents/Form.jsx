import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const schema = Yup.object().shape({
  name: Yup.string().required("*campo obrigatório"),
  email: Yup.string().email("*e-mail inválido").required("*campo obrigatório"),
  cep: Yup.string().required("*campo obrigatório"),
});
export default function PurchaseForm({ setStage, setClientInfo }) {
  const handleSubmit = (values) => {
    setClientInfo(values);
    setStage(3);
  };

  const onBlurCEP = (e, setFieldValue) => {
    const { value } = e.target;
    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((res) => {
      setFieldValue("adress", res.data.logradouro);
      setFieldValue("complement", res.data.complemento);
      setFieldValue("district", res.data.bairro);
      setFieldValue("city", res.data.localidade);
      setFieldValue("state", res.data.uf);
    });
  };
  return (
    <div className="cartScreen">
      <div className="itemsContainer">
        <Formik
          validationSchema={schema}
          onSubmit={handleSubmit}
          initialValues={{
            name: "",
            email: "",
            cpf: "",
            cep: "",
            adress: "",
            number: "",
            complement: "",
            district: "",
            city: "",
            state: "",
            payment: "credit",
          }}
        >
          {({ errors, isValid, setFieldValue }) => (
            <Form className="formContainer">
              <h1>Informações pessoais</h1>
              <div className="formField">
                <label htmlFor="name">Nome</label>
                <Field id="name" name="name" type="text" />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>
              <div className="formField">
                <label htmlFor="email">E-mail</label>
                <Field id="email" name="email" type="email" />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>

              <h1>Endereço para entrega</h1>
              <div className="formField">
                <label htmlFor="cep">CEP</label>
                <Field
                  id="cep"
                  name="cep"
                  type="number"
                  onBlur={(e) => {
                    onBlurCEP(e, setFieldValue);
                  }}
                />
                {errors.cep && <div className="error">{errors.cep}</div>}
              </div>
              <div className="formField">
                <label htmlFor="adress">Logradouro</label>
                <Field id="adress" name="adress" type="text" />
              </div>
              <div className="formField">
                <label htmlFor="number">Número</label>
                <Field id="number" name="number" type="text" />
              </div>
              <div className="formField">
                <label htmlFor="complement">complemento</label>
                <Field id="complement" name="complement" type="text" />
              </div>
              <div className="formField">
                <label htmlFor="district">bairro</label>
                <Field id="district" name="district" type="text" />
              </div>
              <div className="formField">
                <label htmlFor="city">Cidade</label>
                <Field id="city" name="city" type="text" />
              </div>
              <div className="formField">
                <label htmlFor="state">Estado</label>
                <Field id="state" name="state" type="text" />
              </div>
              <h1>Forma de pagamento</h1>

              <label>
                <Field type="radio" name="payment" value="credit" />
                cartão de crédito
              </label>
              <label>
                <Field type="radio" name="payment" value="ticket" />
                Boleto
              </label>

              <button
                className="confirmButton"
                type="submit"
                disabled={!isValid}
              >
                Ir para pagamento
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
