<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 31.01.19
 * Time: 13:54
 */

namespace con4gis\RoutingBundle\Entity;

use \Doctrine\ORM\Mapping as ORM;
use con4gis\CoreBundle\Entity\BaseEntity;

/**
 * Class RoutingConfiguration
 *
 * @ORM\Entity
 * @ORM\Table(name="tl_c4g_routing_configuration")
 * @package con4gis\RoutingBundle\Entity
 */
class RoutingConfiguration extends BaseEntity
{
    /**
     * @var int
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    protected $id = 0;
    
    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $tstamp = 0;
    
    /**
     * @var string
     * @ORM\Column(type="string")
     */
    protected $name = '';
    
    /**
     * @var string
     * @ORM\Column(type="string", length=255, name="router_viaroute_url")
     */
    protected $routerViarouteUrl = '';
    
    /**
     * @var string
     * @ORM\Column(type="string", length=255, name="router_attribution")
     */
    protected $routerAttribution = '';
    
    /**
     * @var string
     * @ORM\Column(type="string", name="router_api_selection")
     */
    protected $routerApiSelection = '';
    
    /**
     * @var string
     * @ORM\Column(type="string", length=1, name="router_alternative")
     */
    protected $routerAlternative = '';
    
    /**
     * @var string
     * @ORM\Column(type="string", length=255, name="router_api_key")
     */
    protected $routerApiKey = '';
    
    /**
     * @var int
     * @ORM\Column(type="integer", name="router_from_locstyle", options={"default" : 0})
     */
    protected $routerFromLocstyle = 0;
    
    /**
     * @var int
     * @ORM\Column(type="integer", name="router_to_locstyle", options={"default" : 0})
     */
    protected $routerToLocstyle = 0;
    
    /**
     * @var int
     * @ORM\Column(type="integer", name="router_point_locstyle", options={"default" : 0})
     */
    protected $routerPointLocstyle = 0;
    
    /**
     * @var int
     * @ORM\Column(type="integer", name="router_interim_locstyle", options={"default" : 0})
     */
    protected $routerInterimLocstyle = 0;
    
    /**
     * @var array
     * @ORM\Column(type="array", name="router_profiles")
     */
    protected $routerProfiles = [];
    
    /**
     * @var float
     * @ORM\Column(type="float", precision=5, scale=2)
     */
    protected $minDetourArea = 0.0;
    
    /**
     * @var float
     * @ORM\Column(type="float", precision=5, scale=2)
     */
    protected $maxDetourArea = 0.0;
    
    /**
     * @var float
     * @ORM\Column(type="float", precision=5, scale=2)
     */
    protected $initialDetourArea = 0.0;
    
    /**
     * @var null
     * @ORM\Column(type="array")
     */
    protected $routerLayers = null;
    
    /**
     * @var string
     * @ORM\Column(type="string", length=1)
     */
    protected $hideFeaturesWithoutLabel = '';
    
    /**
     * @var float
     * @ORM\Column(type="float", precision=5, scale=2)
     */
    protected $minDetourRoute = 0.0;
    
    /**
     * @var float
     * @ORM\Column(type="float", precision=5, scale=2)
     */
    protected $maxDetourRoute = 0.0;
    
    /**
     * @var float
     * @ORM\Column(type="float", precision=5, scale=2)
     */
    protected $initialDetourRoute = 0.0;
    
    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $clickLocstyle = 0;
    
    /**
     * @var string
     * @ORM\Column(type="string", length=1)
     */
    protected $openRouter = '';
    
    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $areaCenterLocstyle = 0;
    
    /**
     * @var string
     * @ORM\Column(type="string", length=1)
     */
    protected $enableOverPoints = '';
    
    /**
     * @var string
     * @ORM\Column(type="string", length=1)
     */
    protected $enableTargetSwitch = '';
    
    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     */
    protected $routerHeadline = '';
    
    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $priorityFeatures = 0;
    
    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $priorityLocstyle = 0;
    
    /**
     * @var string
     * @ORM\Column(type="string", length=1)
     */
    protected $closeAfterSearch = '';
    
    /**
     * @var string
     * @ORM\Column(type="string", length=1)
     */
    protected $routeStartButton = '';
    
    /**
     * @var string
     * @ORM\Column(type="string", length=1)
     */
    protected $showFeatures = '';
    
    /**
     * @var string
     * @ORM\Column(type="string", length=100)
     */
    protected $featureLabel = '';
    
    /**
     * @var string
     * @ORM\Column(type="string", length=1)
     */
    protected $showInstructions = '';
    
    /**
     * @var string
     * @ORM\Column(type="string", length=100)
     */
    protected $instructionLabel = '';
    
    /**
     * @var string
     * @ORM\Column(type="string", length=10)
     */
    protected $initialMode = '';
    
    /**
     * @var string
     * @ORM\Column(type="string", length=1)
     */
    protected $usePermalink = '';
    
    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }
    
    /**
     * @param int $id
     */
    public function setId(int $id): void
    {
        $this->id = $id;
    }
    
    /**
     * @return int
     */
    public function getTstamp(): int
    {
        return $this->tstamp;
    }
    
    /**
     * @param int $tstamp
     */
    public function setTstamp(int $tstamp): void
    {
        $this->tstamp = $tstamp;
    }
    
    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }
    
    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }
    
    /**
     * @return string
     */
    public function getRouterViarouteUrl(): string
    {
        return $this->routerViarouteUrl;
    }
    
    /**
     * @param string $routerViarouteUrl
     */
    public function setRouterViarouteUrl(string $routerViarouteUrl): void
    {
        $this->routerViarouteUrl = $routerViarouteUrl;
    }
    
    /**
     * @return string
     */
    public function getRouterAttribution(): string
    {
        return $this->routerAttribution;
    }
    
    /**
     * @param string $routerAttribution
     */
    public function setRouterAttribution(string $routerAttribution): void
    {
        $this->routerAttribution = $routerAttribution;
    }
    
    /**
     * @return string
     */
    public function getRouterApiSelection(): string
    {
        return $this->routerApiSelection;
    }
    
    /**
     * @param string $routerApiSelection
     */
    public function setRouterApiSelection(string $routerApiSelection): void
    {
        $this->routerApiSelection = $routerApiSelection;
    }
    
    /**
     * @return string
     */
    public function getRouterAlternative(): string
    {
        return $this->routerAlternative;
    }
    
    /**
     * @param string $routerAlternative
     */
    public function setRouterAlternative(string $routerAlternative): void
    {
        $this->routerAlternative = $routerAlternative;
    }
    
    /**
     * @return string
     */
    public function getRouterApiKey(): string
    {
        return $this->routerApiKey;
    }
    
    /**
     * @param string $routerApiKey
     */
    public function setRouterApiKey(string $routerApiKey): void
    {
        $this->routerApiKey = $routerApiKey;
    }
    
    /**
     * @return int
     */
    public function getRouterFromLocstyle(): int
    {
        return $this->routerFromLocstyle;
    }
    
    /**
     * @param int $routerFromLocstyle
     */
    public function setRouterFromLocstyle(int $routerFromLocstyle): void
    {
        $this->routerFromLocstyle = $routerFromLocstyle;
    }
    
    /**
     * @return int
     */
    public function getRouterToLocstyle(): int
    {
        return $this->routerToLocstyle;
    }
    
    /**
     * @param int $routerToLocstyle
     */
    public function setRouterToLocstyle(int $routerToLocstyle): void
    {
        $this->routerToLocstyle = $routerToLocstyle;
    }
    
    /**
     * @return int
     */
    public function getRouterPointLocstyle(): int
    {
        return $this->routerPointLocstyle;
    }
    
    /**
     * @param int $routerPointLocstyle
     */
    public function setRouterPointLocstyle(int $routerPointLocstyle): void
    {
        $this->routerPointLocstyle = $routerPointLocstyle;
    }
    
    /**
     * @return int
     */
    public function getRouterInterimLocstyle(): int
    {
        return $this->routerInterimLocstyle;
    }
    
    /**
     * @param int $routerInterimLocstyle
     */
    public function setRouterInterimLocstyle(int $routerInterimLocstyle): void
    {
        $this->routerInterimLocstyle = $routerInterimLocstyle;
    }
    
    /**
     * @return array
     */
    public function getRouterProfiles(): array
    {
        return $this->routerProfiles;
    }
    
    /**
     * @param array $routerProfiles
     */
    public function setRouterProfiles(array $routerProfiles): void
    {
        $this->routerProfiles = $routerProfiles;
    }
    
    /**
     * @return float
     */
    public function getMinDetourArea(): float
    {
        return $this->minDetourArea;
    }
    
    /**
     * @param float $minDetourArea
     */
    public function setMinDetourArea(float $minDetourArea): void
    {
        $this->minDetourArea = $minDetourArea;
    }
    
    /**
     * @return float
     */
    public function getMaxDetourArea(): float
    {
        return $this->maxDetourArea;
    }
    
    /**
     * @param float $maxDetourArea
     */
    public function setMaxDetourArea(float $maxDetourArea): void
    {
        $this->maxDetourArea = $maxDetourArea;
    }
    
    /**
     * @return float
     */
    public function getInitialDetourArea(): float
    {
        return $this->initialDetourArea;
    }
    
    /**
     * @param float $initialDetourArea
     */
    public function setInitialDetourArea(float $initialDetourArea): void
    {
        $this->initialDetourArea = $initialDetourArea;
    }
    
    /**
     * @return null
     */
    public function getRouterLayers()
    {
        return $this->routerLayers;
    }
    
    /**
     * @param null $routerLayers
     */
    public function setRouterLayers($routerLayers): void
    {
        $this->routerLayers = $routerLayers;
    }
    
    /**
     * @return string
     */
    public function getHideFeaturesWithoutLabel(): string
    {
        return $this->hideFeaturesWithoutLabel;
    }
    
    /**
     * @param string $hideFeaturesWithoutLabel
     */
    public function setHideFeaturesWithoutLabel(string $hideFeaturesWithoutLabel): void
    {
        $this->hideFeaturesWithoutLabel = $hideFeaturesWithoutLabel;
    }
    
    /**
     * @return float
     */
    public function getMinDetourRoute(): float
    {
        return $this->minDetourRoute;
    }
    
    /**
     * @param float $minDetourRoute
     */
    public function setMinDetourRoute(float $minDetourRoute): void
    {
        $this->minDetourRoute = $minDetourRoute;
    }
    
    /**
     * @return float
     */
    public function getMaxDetourRoute(): float
    {
        return $this->maxDetourRoute;
    }
    
    /**
     * @param float $maxDetourRoute
     */
    public function setMaxDetourRoute(float $maxDetourRoute): void
    {
        $this->maxDetourRoute = $maxDetourRoute;
    }
    
    /**
     * @return float
     */
    public function getInitialDetourRoute(): float
    {
        return $this->initialDetourRoute;
    }
    
    /**
     * @param float $initialDetourRoute
     */
    public function setInitialDetourRoute(float $initialDetourRoute): void
    {
        $this->initialDetourRoute = $initialDetourRoute;
    }
    
    /**
     * @return int
     */
    public function getClickLocstyle(): int
    {
        return $this->clickLocstyle;
    }
    
    /**
     * @param int $clickLocstyle
     */
    public function setClickLocstyle(int $clickLocstyle): void
    {
        $this->clickLocstyle = $clickLocstyle;
    }
    
    /**
     * @return string
     */
    public function getOpenRouter(): string
    {
        return $this->openRouter;
    }
    
    /**
     * @param string $openRouter
     */
    public function setOpenRouter(string $openRouter): void
    {
        $this->openRouter = $openRouter;
    }
    
    /**
     * @return int
     */
    public function getAreaCenterLocstyle(): int
    {
        return $this->areaCenterLocstyle;
    }
    
    /**
     * @param int $areaCenterLocstyle
     */
    public function setAreaCenterLocstyle(int $areaCenterLocstyle): void
    {
        $this->areaCenterLocstyle = $areaCenterLocstyle;
    }
    
    /**
     * @return string
     */
    public function getEnableOverPoints(): string
    {
        return $this->enableOverPoints;
    }
    
    /**
     * @param string $enableOverPoints
     */
    public function setEnableOverPoints(string $enableOverPoints): void
    {
        $this->enableOverPoints = $enableOverPoints;
    }
    
    /**
     * @return string
     */
    public function getEnableTargetSwitch(): string
    {
        return $this->enableTargetSwitch;
    }
    
    /**
     * @param string $enableTargetSwitch
     */
    public function setEnableTargetSwitch(string $enableTargetSwitch): void
    {
        $this->enableTargetSwitch = $enableTargetSwitch;
    }
    
    /**
     * @return string
     */
    public function getRouterHeadline(): string
    {
        return $this->routerHeadline;
    }
    
    /**
     * @param string $routerHeadline
     */
    public function setRouterHeadline(string $routerHeadline): void
    {
        $this->routerHeadline = $routerHeadline;
    }
    
    /**
     * @return int
     */
    public function getPriorityFeatures(): int
    {
        return $this->priorityFeatures;
    }
    
    /**
     * @param int $priorityFeatures
     */
    public function setPriorityFeatures(int $priorityFeatures): void
    {
        $this->priorityFeatures = $priorityFeatures;
    }
    
    /**
     * @return int
     */
    public function getPriorityLocstyle(): int
    {
        return $this->priorityLocstyle;
    }
    
    /**
     * @param int $priorityLocstyle
     */
    public function setPriorityLocstyle(int $priorityLocstyle): void
    {
        $this->priorityLocstyle = $priorityLocstyle;
    }
    
    /**
     * @return string
     */
    public function getCloseAfterSearch(): string
    {
        return $this->closeAfterSearch;
    }
    
    /**
     * @param string $closeAfterSearch
     */
    public function setCloseAfterSearch(string $closeAfterSearch): void
    {
        $this->closeAfterSearch = $closeAfterSearch;
    }
    
    /**
     * @return string
     */
    public function getRouteStartButton(): string
    {
        return $this->routeStartButton;
    }
    
    /**
     * @param string $routeStartButton
     */
    public function setRouteStartButton(string $routeStartButton): void
    {
        $this->routeStartButton = $routeStartButton;
    }
    
    /**
     * @return string
     */
    public function getShowFeatures(): string
    {
        return $this->showFeatures;
    }
    
    /**
     * @param string $showFeatures
     */
    public function setShowFeatures(string $showFeatures): void
    {
        $this->showFeatures = $showFeatures;
    }
    
    /**
     * @return string
     */
    public function getFeatureLabel(): string
    {
        return $this->featureLabel;
    }
    
    /**
     * @param string $featureLabel
     */
    public function setFeatureLabel(string $featureLabel): void
    {
        $this->featureLabel = $featureLabel;
    }
    
    /**
     * @return string
     */
    public function getShowInstructions(): string
    {
        return $this->showInstructions;
    }
    
    /**
     * @param string $showInstructions
     */
    public function setShowInstructions(string $showInstructions): void
    {
        $this->showInstructions = $showInstructions;
    }
    
    /**
     * @return string
     */
    public function getInstructionLabel(): string
    {
        return $this->instructionLabel;
    }
    
    /**
     * @param string $instructionLabel
     */
    public function setInstructionLabel(string $instructionLabel): void
    {
        $this->instructionLabel = $instructionLabel;
    }
    
    /**
     * @return string
     */
    public function getInitialMode(): string
    {
        return $this->initialMode;
    }
    
    /**
     * @param string $initialMode
     */
    public function setInitialMode(string $initialMode): void
    {
        $this->initialMode = $initialMode;
    }
    
    /**
     * @return string
     */
    public function getUsePermalink(): string
    {
        return $this->usePermalink;
    }
    
    /**
     * @param string $usePermalink
     */
    public function setUsePermalink(string $usePermalink): void
    {
        $this->usePermalink = $usePermalink;
    }
}