import React, { useState } from 'react';

const SubGroups = () => {
    const subgroup = [
        { id: 1, titel: 'مشكل فرن مع ملوخية' },
        { id: 2, titel: 'بامية' },
        { id: 3, titel: 'مسقع' },
        { id: 4, titel: 'مشكل فرن مع ملوخية' },
        { id: 5, titel: 'مشكل فرن مع ملوخية' },
        { id: 6, titel: 'مشكل فرن مع ملوخية' },
        { id: 7, titel: 'مشكل فرن مع ملوخية' },
        { id: 8, titel: 'بامية' },
        { id: 9, titel: 'مسقع' },
        { id: 10, titel: 'مشكل فرن مع ملوخية' },
        { id: 11, titel: 'بامية' },
        { id: 12, titel: 'مسقع' },
        { id: 13, titel: 'مشكل فرن مع ملوخية' },
        { id: 14, titel: 'مشكل فرن مع ملوخية' },
        { id: 15, titel: 'مشكل فرن مع ملوخية' },
        { id: 16, titel: 'مشكل فرن مع ملوخية' },
        { id: 17, titel: 'بامية' },
        { id: 18, titel: 'مسقع' },
        { id: 19, titel: 'مشكل فرن مع ملوخية' },
        { id: 20, titel: 'بامية' },
        { id: 21, titel: 'مسقع' },
        { id: 22, titel: 'مشكل فرن مع ملوخية' },
        { id: 23, titel: 'مشكل فرن مع ملوخية' },
        { id: 24, titel: 'مشكل فرن مع ملوخية' },
        { id: 25, titel: 'مشكل فرن مع ملوخية' },
        { id: 26, titel: 'بامية' },
        { id: 27, titel: 'مسقع' },
        { id: 28, titel: 'مشكل فرن مع ملوخية' },
        { id: 29, titel: 'بامية' },
        { id: 30, titel: 'مسقع' },
        { id: 31, titel: 'مشكل فرن مع ملوخية' },
        { id: 32, titel: 'مشكل فرن مع ملوخية' },
        { id: 33, titel: 'مشكل فرن مع ملوخية' },
        { id: 34, titel: 'مشكل فرن مع ملوخية' },
        { id: 35, titel: 'بامية' },
        { id: 36, titel: 'مسقع' },
        { id: 37, titel: 'مشكل فرن مع ملوخية' },
        { id: 38, titel: 'بامية' },
        { id: 39, titel: 'مسقع' },
        { id: 40, titel: 'مشكل فرن مع ملوخية' },
        { id: 53, titel: 'مشكل فرن مع ملوخية' },
        { id: 64, titel: 'مشكل فرن مع ملوخية' },
        { id: 75, titel: 'مشكل فرن مع ملوخية' },
        { id: 82, titel: 'بامية' },
        { id: 93, titel: 'مسقع' },
        { id: 112, titel: 'مشكل فرن مع ملوخية' },
        { id: 221, titel: 'بامية' },
        { id: 321, titel: 'مسقع' },
        { id: 412, titel: 'مشكل فرن مع ملوخية' },
        { id: 531, titel: 'مشكل فرن مع ملوخية' },
        { id: 63123, titel: 'مشكل فرن مع ملوخية' },
        { id: 73123, titel: 'مشكل فرن مع ملوخية' },
        { id: 83123, titel: 'بامية' },
        { id: 93123, titel: 'مسقع' },
        { id: 103213, titel: 'مشكل فرن مع ملوخية' },
        { id: 113123, titel: 'بامية' },
        { id: 13212, titel: 'مسقع' },
        { id: 11233, titel: 'مشكل فرن مع ملوخية' },
        { id: 1123134, titel: 'مشكل فرن مع ملوخية' },
        { id: 11235, titel: 'مشكل فرن مع ملوخية' },
        { id: 112316, titel: 'مشكل فرن مع ملوخية' },
        { id: 1237, titel: 'بامية' },
        { id: 11238, titel: 'مسقع' },
        { id: 1129, titel: 'مشكل فرن مع ملوخية' },
        { id: 2310, titel: 'بامية' },
        { id: 2231, titel: 'مسقع' },
        { id: 2122, titel: 'مشكل فرن مع ملوخية' },
        { id: 233, titel: 'مشكل فرن مع ملوخية' },
        { id: 21234, titel: 'مشكل فرن مع ملوخية' },
        { id: 2125, titel: 'مشكل فرن مع ملوخية' },
        { id: 236, titel: 'بامية' },
        { id: 21237, titel: 'مسقع' },
        { id: 218, titel: 'مشكل فرن مع ملوخية' },
        { id: 239, titel: 'بامية' },
        { id: 31230, titel: 'مسقع' },
        { id: 311, titel: 'مشكل فرن مع ملوخية' },
        { id: 32312, titel: 'مشكل فرن مع ملوخية' },
        { id: 3233, titel: 'مشكل فرن مع ملوخية' },
        { id: 314, titel: 'مشكل فرن مع ملوخية' },
        { id: 3315, titel: 'بامية' },
        { id: 3236, titel: 'مسقع' },
        { id: 3127, titel: 'مشكل فرن مع ملوخية' },
        { id: 3318, titel: 'بامية' },
        { id: 3239, titel: 'مسقع' },
        { id: 4120, titel: 'مشكل فرن مع ملوخية' },
        { id: 5313, titel: 'مشكل فرن مع ملوخية' },
        { id: 6234, titel: 'مشكل فرن مع ملوخية' },
        { id: 7125, titel: 'مشكل فرن مع ملوخية' },
        { id: 8312, titel: 'بامية' },
        { id: 9233, titel: 'مسقع' },
        { id: 113, titel: 'مشكل فرن مع ملوخية' },
        { id: 21, titel: 'بامية' },
        { id: 323, titel: 'مسقع' },
        { id: 413, titel: 'مشكل فرن مع ملوخية' },
        { id: 521, titel: 'مشكل فرن مع ملوخية' },
        { id: 1, titel: 'مشكل فرن مع ملوخية' },
        { id: 72, titel: 'مشكل فرن مع ملوخية' },
        { id: 8312, titel: 'بامية' },
        { id: 93, titel: 'مسقع' },
        { id: 1120, titel: 'مشكل فرن مع ملوخية' },
        { id: 1311, titel: 'بامية' },
        { id: 1232, titel: 'مسقع' },
        { id: 11233, titel: 'مشكل فرن مع ملوخية' },
        { id: 112314, titel: 'مشكل فرن مع ملوخية' },
        { id: 12315, titel: 'مشكل فرن مع ملوخية' },
        { id: 136, titel: 'مشكل فرن مع ملوخية' },
        { id: 1127, titel: 'بامية' },
        { id: 1318, titel: 'مسقع' },
        { id: 12313139, titel: 'مشكل فرن مع ملوخية' },
        { id: 2130, titel: 'بامية' },
        { id: 2131, titel: 'مسقع' },
        { id: 2122, titel: 'مشكل فرن مع ملوخية' },
        { id: 2313, titel: 'مشكل فرن مع ملوخية' },
        { id: 234, titel: 'مشكل فرن مع ملوخية' },
        { id: 21235, titel: 'مشكل فرن مع ملوخية' },
        { id: 2126, titel: 'بامية' },
        { id: 2317, titel: 'مسقع' },
        { id: 223128, titel: 'مشكل فرن مع ملوخية' },
        { id: 239, titel: 'بامية' },
        { id: 31230, titel: 'مسقع' },
        { id: 311, titel: 'مشكل فرن مع ملوخية' },
        { id: 33122, titel: 'مشكل فرن مع ملوخية' },
        { id: 333, titel: 'مشكل فرن مع ملوخية' },
        { id: 31234, titel: 'مشكل فرن مع ملوخية' },
        { id: 3125, titel: 'بامية' },
        { id: 3316, titel: 'مسقع' },
        { id: 3237, titel: 'مشكل فرن مع ملوخية' },
        { id: 3128, titel: 'بامية' },
        { id: 339, titel: 'مسقع' },
        { id: 4130, titel: 'مشكل فرن مع ملوخية' },
        { id: 51233, titel: 'مشكل فرن مع ملوخية' },
        { id: 6124, titel: 'مشكل فرن مع ملوخية' },
        { id: 7315, titel: 'مشكل فرن مع ملوخية' },
        { id: 8232, titel: 'بامية' },
        { id: 9123, titel: 'مسقع' },
    ];

    const [chosenItems, setChosenItems] = useState([]);
    // use the loading state when you get the api sihem
    const [loading , setLoading] = useState(true);


    const handleChoose = (id) => {
        if (chosenItems.includes(id)) {
            setChosenItems(chosenItems.filter(item => item !== id));
        } else {
            setChosenItems([...chosenItems, id]);
        }
    };

    return (
        <div className='grid grid-cols-5  w-full lg:gap-1 h-fit'>
            {subgroup.length > 0 ? (
                subgroup.map(subgroup => (
                    <div 
                        onClick={() => handleChoose(subgroup.id)} 
                        key={subgroup.id} 
                        className={`${chosenItems.includes(subgroup.id) ? 'bg-gray-600 text-white' : 'bg-white'} border border-black  py-5 h-fit text-center rounded-lg shadow hover:shadow-lg duration-150 cursor-pointer text-xs `}>
                        {subgroup.titel}
                    </div>
                ))
            ) : (
                <div className="w-full text-center py-10 text-gray-500">
                    لا يوجد أصناف
                </div>
            )}
        </div>
    );
};

export default SubGroups;
