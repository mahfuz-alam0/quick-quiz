import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import './Statistics.css';

const Statistics = () => {
    const { data } = useLoaderData();

    let new_name_data;
    let new_total_data;
    let chart_data = [];

    for (const info of data) {
        new_name_data = info.name;
        new_total_data = info.total;
        chart_data.push({ name: new_name_data, total: new_total_data });
    }

    return (
        <div className='rechart'>
            <LineChart className='chart_control' width={500} height={300} data={chart_data}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
    );
};

export default Statistics;