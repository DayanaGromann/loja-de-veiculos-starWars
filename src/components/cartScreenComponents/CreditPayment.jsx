import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const schema = Yup.object().shape({
  creditCardNumber: Yup.number().required("*campo obrigatório"),
  cvv: Yup.number().required("*campo obrigatório"),
  cpf: Yup.string().required("*campo obrigatório"),
  // .test("teste", "CPF inválido, digite apenas os números", (cpf) => {
  //   return cpf.length === 11 && !isNaN(cpf);
  // })
  nome: Yup.string().required("*campo obrigatório"),
});

export default function Payment({ setStage, submit }) {
  return (
    <div className="cartScreen">
      <div className="itemsContainer">
        <Formik
          validationSchema={schema}
          onSubmit={() => {
            submit();
          }}
          initialValues={{
            creditCardNumber: "",
            nome: "",
            cpf: "",
            cvv: "",
            select: "",
          }}
        >
          {({ errors, isValid }) => (
            <Form className="formContainer">
              <h1>Cartão de crédito</h1>
              <div className="formField">
                <label htmlFor="creditCardNumber">Número do cartão</label>
                <Field
                  id="creditCardNumber"
                  name="creditCardNumber"
                  type="text"
                />
                {errors.creditCardNumber && (
                  <div className="error">{errors.creditCardNumber}</div>
                )}
              </div>
              <div className="formField">
                <label htmlFor="nome">Nome</label>
                <Field id="nome" name="nome" type="text" />
                {errors.nome && <div className="error">{errors.nome}</div>}
              </div>
              <div className="formField">
                <label htmlFor="cpf">CPF</label>
                <Field id="cpf" name="cpf" type="text" />
                {errors.cpf && <div className="error">{errors.cpf}</div>}
              </div>
              <div>
                <label htmlFor="cvv">CVV</label>
                <Field
                  id="cvv"
                  name="cvv"
                  type="text"
                  style={{ width: "10%", marginRight: 10 }}
                />

                <label htmlFor="installments">parcelamento</label>
                <select
                  id="installments"
                  name="installments"
                  type="select"
                  style={{ width: "30%" }}
                >
                  <option>1 parcela</option>
                  <option>2 parcelas</option>
                  <option>3 parcelas</option>
                </select>
              </div>
              <button
                className="confirmButton"
                type="submit"
                disabled={!isValid}
              >
                Confirmar pagamento
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
