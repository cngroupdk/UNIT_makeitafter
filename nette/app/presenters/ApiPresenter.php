<?php

namespace App\Presenters;


use Nette\Utils\Random;


class ApiPresenter extends ApiBasePresenter
{



    public function actionRead() {
        $this->sendJson(['data' => 'example']);
    }

    public function actionDefault() {
        $this->sendJson(['action' => 'default']);
    }

    public function actionData() {
        $this->sendJson([
            'data' => array_map(function($i) {
                return Random::generate(mt_rand(10, 20));
            }, range(0, mt_rand(10, 100))),
        ]);
    }

}