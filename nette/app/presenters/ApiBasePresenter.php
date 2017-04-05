<?php

namespace App\Presenters;


use Nette\Http\IResponse;

class ApiBasePresenter extends BasePresenter
{

    public function error($message = NULL, $httpCode = IResponse::S404_NOT_FOUND)
    {
        $this->getHttpResponse()->setCode($httpCode);
        $this->sendJson([
            'error' => $message
        ]);
    }

    public function sendTemplate()
    {
        $this->error('Resource not found');
    }

}