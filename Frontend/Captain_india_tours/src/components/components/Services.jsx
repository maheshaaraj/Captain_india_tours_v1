
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const services = [
    {
        icon: "route",
        title: "Travel Planning",
        description: "Customized itineraries designed around your preferences and schedule",
        features: ["Personalized itineraries", "Expert guidance", "24/7 support"],
        delay: "0s",
    },
    {
        icon: "hotel",
        title: "Accommodation",
        description: "Carefully selected hotels and resorts for comfortable stays",
        features: ["Luxury hotels", "Heritage stays", "Best locations"],
        delay: "1s",
    },
    {
        icon: "car",
        title: "Transportation",
        description: "Comfortable and reliable transport solutions",
        features: ["Private cars", "Luxury buses", "Flight bookings"],
        delay: "2s",
    },
    {
        icon: "utensils",
        title: "Food & Dining",
        description: "Experience local cuisines and fine dining",
        features: ["Local cuisine", "Restaurant bookings", "Dietary arrangements"],
        delay: "0s",
    },
    {
        icon: "person-hiking",
        title: "Activities",
        description: "Exciting adventures and cultural experiences",
        features: ["Adventure sports", "Cultural tours", "Local experiences"],
        delay: "1s",
    },
    {
        icon: "headset",
        title: "24/7 Support",
        description: "Round-the-clock assistance for your journey",
        features: ["Emergency support", "Travel assistance", "Query resolution"],
        delay: "2s",
    },
];

const ServiceCard = ({ icon, title, description, features, delay }) => (
    <div className="animate__animated animate__fadeInUp animate__delay-${delay}">
        <div className={`w-full bg-neutral-800 overflow-hidden rounded-xl p-6 transition-transform hover:scale-105 flex flex-col h-full`}>
            <div className="text-orange-500 text-3xl mb-4">
                <FontAwesomeIcon icon={icon} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-300 mb-4 ">{description}</p>
            <ul className="text-gray-400 space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <FontAwesomeIcon className="text-orange-500 mr-2" icon="check" />
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    </div>
    
);

const Services = () => {
    return (
        <section id="services" className="py-20 bg-neutral-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInUp">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto animate__animated animate__fadeInUp">
                        Comprehensive travel solutions tailored to your needs
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
