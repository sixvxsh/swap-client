import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
// import { url } from 'inspector';
import { map , catchError, Observable } from 'rxjs';

@Injectable()
export class SwapService {
    constructor(private httpservice:HttpService) {}

    async swapRequest() {

        const url =  'http://localhost:3000/advertise/request';
        const data = {
            CollateralNft: "collateral",
            publicKey: "testBMPH8EKi7KwuYMAGfFaGKq9FSARDz1FVgGxnHLyQNTWe",
            RequestedNft: "test4NtzHf68akyHoLELhTMj2GFih62GjRVQHyq4MHzndRJQ",
            verified: false
        };

        try {
            const response = await axios.post(url , data);
            return response.data;
        } catch (error) {
            console.error('ERROR',error);
            throw error;
        }
    }

    async stake() {
        const url =  'http://localhost:3000/advertise/stake';
        const data = {
            mint: 'Gz12ZjAhEupJCYk9p1YdAHoq8w9JtmqfKb5xgQMfNswD'
        }

        try {
            const response = await axios.post(url, data)
            return response.data;
        } catch (error) {
            console.error('Error', error);
            throw error;
        }
    }
}









        // return this.httpservice
        // .post('http://localhost:3000/advertise/request' , 
        // {
        //     CollateralNft:"collateral",
        //     publicKey: "testBMPH8EKi7KwuYMAGfFaGKq9FSARDz1FVgGxnHLyQNTWe",
        //     RequestedNft : "test4NtzHf68akyHoLELhTMj2GFih62GjRVQHyq4MHzndRJQ",
        //     verified: false
        // })
        // .pipe(
        //     map((res) => {
        //         return res.data;
        //     }),
        // )
        // .pipe(
        //     catchError(() => {
        //         throw new ForbiddenException('API not available');
        //     }),
        // );