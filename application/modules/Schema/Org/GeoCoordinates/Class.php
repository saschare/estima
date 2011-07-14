<?php


/**
 * @author Andreas Kummer, w3concepts AG
 * @copyright Copyright &copy; 2011, w3concepts AG
 */

class Module_Schema_Org_GeoCoordinates_Class extends Aitsu_Module_SchemaOrg_Abstract {

	protected function _init() {
	}

	protected function _main() {

		$view = $this->_getView();

		return $view->render('index.phtml');
	}
	
	protected function _getView() {

		$view = parent :: _getView();

		$view->elevation = Aitsu_Content_Config_Text :: set($this->_index, 'schema.org.GeoCoordinates.Elevation', 'Elevation', 'GeoCoordinates');
		$view->latitude = Aitsu_Content_Config_Text :: set($this->_index, 'schema.org.GeoCoordinates.Latitude', 'Latitude', 'GeoCoordinates');
		$view->longitude = Aitsu_Content_Config_Text :: set($this->_index, 'schema.org.GeoCoordinates.Longitude', 'Longitude', 'GeoCoordinates');

		return $view;
	}
}