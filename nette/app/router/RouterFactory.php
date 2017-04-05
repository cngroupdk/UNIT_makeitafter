<?php

namespace App;

use Nette;
use Nette\Application\Routers\RouteList;
use Nette\Application\Routers\Route;
use Ublaboo\ApiRouter\ApiRoute;


class RouterFactory
{
	use Nette\StaticClass;

	/**
	 * @return Nette\Application\IRouter
	 */
	public static function createRouter()
	{
		$router = new RouteList;
        $router[] = new Route('<action>', 'Api:default');
        $router[] = new Route('<presenter>/<action>', 'Api:default');
        return $router;
	}

}