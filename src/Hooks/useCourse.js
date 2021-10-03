import { useEffect, useState } from 'react';

const useCourse = () => {
    //declare state
    const [courses, setCourses] = useState([]);
    //Fetch data from Json file
    useEffect(() => {
        fetch('./course.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return [courses, setCourses];
};

export default useCourse;