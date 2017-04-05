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
        $router[] = new ApiRoute('/api', 'Api');
        $router[] = new Route('<presenter>/<action>', 'Homepage:default');
        return $router;
	}

}
