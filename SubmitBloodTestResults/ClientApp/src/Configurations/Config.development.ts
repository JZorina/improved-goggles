import { ConfigModal } from "../Models/ConfigModal";


export const config: ConfigModal = {
    api: 'http://192.168.1.166:44351',
    useMockData: true,
    paths: {
        getTestResult: '/api/TestResults/get-blood-tests'
    }
};
