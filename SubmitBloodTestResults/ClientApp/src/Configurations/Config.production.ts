import { ConfigModal } from "../Models/ConfigModal";


export const config: ConfigModal = {
    api: 'http://192.168.18.51:5000',
    useMockData: true,
    paths: {
        getTestResult: '/api/TestResults/get-blood-tests',
    }
};
