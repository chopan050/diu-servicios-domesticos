import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import "./FilterButton.css";

export default function FilterButton({ setDateFilter, setTimeFilter, setPaymentFilter }) {
  const [showModal, setShowModal] = useState(false);
  const [innerFilters, setInnerFilters] = useState({ dates: null, times: null, payments: null });

  const onSubmit = (event) => {
    event.preventDefault();

    if (event.target.useDates.checked) {
      innerFilters.dates = [event.target.minDate.value, event.target.maxDate.value];
    } else {
      innerFilters.dates = null;
    }

    if (event.target.useTimes.checked) {
      innerFilters.times = [event.target.minTime.value, event.target.maxTime.value];
    } else {
      innerFilters.times = null;
    }

    if (event.target.usePayments.checked) {
      innerFilters.payments = [parseInt(event.target.minPayment.value), parseInt(event.target.maxPayment.value)];
    } else {
      innerFilters.payments = null;
    }

    setInnerFilters(innerFilters);
    setDateFilter(innerFilters.dates);
    setTimeFilter(innerFilters.times);
    setPaymentFilter(innerFilters.payments);
    setShowModal(false);
  }

  const oneMonthLater = () => {
    const d = new Date();
    d.setMonth(d.getMonth() + 1);
    return d;
  }

  return <>
    <button className="filter-button" onClick={() => setShowModal(true)}>
      <FaFilter /> Filtros
    </button>

    <div className="modal" style={{"display": showModal ? "block" : "none"}}>
      <div className="modal__content">
        <h3 className="modal__header">Filtros</h3>
        <span className="modal__close-button" onClick={() => setShowModal(false)}>
          &times;
        </span>
        <form onSubmit={onSubmit}>
          <table className="form-grid">
            <tbody>
              {/* Fechas */}
              <tr>
                <td><input className="checkbox" type="checkbox" id="use-dates" name="useDates" defaultValue={innerFilters.dates !== null}/></td>
                <td><label htmlFor="use-dates">Fecha:</label></td>
                <td>entre</td>
                <td>
                  <input className="value-input" type="date" name="minDate" defaultValue={
                    innerFilters.dates === null
                    ? (new Date()).toISOString().substring(0, 10)
                    : innerFilters.dates[0]
                  } />
                </td>
                <td>y</td>
                <td>
                  <input className="value-input" type="date" name="maxDate" defaultValue={
                    innerFilters.dates === null
                    ? oneMonthLater().toISOString().substring(0, 10)
                    : innerFilters.dates[1]
                  } />
                </td>
              </tr>

              {/* Horas */}
              <tr>
                <td><input type="checkbox" id="use-times" name="useTimes" defaultValue={innerFilters.times !== null}/></td>
                <td><label htmlFor="use-times">Hora:</label></td>
                <td>entre</td>
                <td>
                  <input className="value-input" type="time" name="minTime" defaultValue={
                    innerFilters.times === null
                    ? "09:00"
                    : innerFilters.times[0]
                  } />
                </td>
                <td>y</td>
                <td>
                  <input className="value-input" type="time" name="maxTime" defaultValue={
                    innerFilters.times === null
                    ? "20:00"
                    : innerFilters.times[1]
                  } />
                </td>
              </tr>

              {/* Pagos */}
              <tr>
                <td><input type="checkbox" id="use-payments" name="usePayments" defaultValue={innerFilters.payments !== null}/></td>
                <td><label htmlFor="use-payments">Sueldo:</label></td>
                <td>entre</td>
                <td>
                  <input className="value-input" type="number" name="minPayment" defaultValue={
                  innerFilters.payments === null
                  ? 30000
                  : innerFilters.payments[0]
                } />
                </td>
                <td>y</td>
                <td>
                  <input className="value-input" type="number" name="maxPayment" defaultValue={
                    innerFilters.payments === null
                    ? 300000
                    : innerFilters.payments[1]
                  } />
                </td>
              </tr>
            </tbody>
          </table>

          

          {/* Subir cambios */}
          <input type="submit" value="Aplicar cambios" />
        </form>
      </div>
    </div> 
  </>
}