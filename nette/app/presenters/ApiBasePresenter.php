<?php

namespace App\Presenters;


use Nette\Application\UI\Presenter;
use Nette\Http\IResponse;

class ApiBasePresenter extends Presenter
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