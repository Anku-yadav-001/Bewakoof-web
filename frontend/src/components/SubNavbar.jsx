const subNavItems = [
    "DEAL HUB",
    "MEN",
    "WOMEN",
    "WINTERWEAR",
    "PLUS SIZE",
    "ACCESSORIES",
    "OFFICIAL MARCH",
    "SNEAKERS",
    "BEWAKOOF AIR",
    "HEAVY DUTY",
    "CUSTOMIZATION"
];

export const SubNavbar = () => {
    return (
        <div className="overflow-x-auto whitespace-nowrap py-2 bg-gray-100 mt-2">
            <div className="flex space-x-12 px-4 text-xl font-semibold">
                {subNavItems.map((item, index) => (
                    <ul key={index} className="inline-block">
                        {item}
                    </ul>
                ))}
            </div>
            <style jsx>{`
                ::-webkit-scrollbar {
                    display: none; /* Hide the scrollbar */
                }
                -ms-overflow-style: none;  /* Internet Explorer 10+ */
                scrollbar-width: none;  /* Firefox */
            `}</style>
        </div>
    );
};
