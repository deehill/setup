import { Testimonials } from '../components';
import { clients } from '../constants';

const Clients = () => {
  return (
    <section id="clients">
      <Testimonials />

      <div className="flex justify-center items-center my-4 flex-wrap w-full">
        {clients.map(({ id, logo }) => (
          <div
            key={id}
            className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-4"
          >
            <img src={logo} alt={id} className="sm:w-48 w-28 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
